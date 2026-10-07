// PostToolUse hook: after Claude edits a file, format it with Prettier and auto-fix ESLint issues,
// so every agent edit matches the project style without a separate step.
// Reads the hook payload (JSON) from stdin. Never blocks the agent: failures are ignored.
import { execFileSync } from "node:child_process";
import { relative } from "node:path";

const FORMATTABLE = /\.(tsx?|jsx?|mjs|json|css|md)$/;
const LINTABLE = /\.(tsx?|jsx?|mjs)$/;

let input = "";
for await (const chunk of process.stdin) input += chunk;

const filePath = JSON.parse(input || "{}")?.tool_input?.file_path;
const projectDir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();

if (filePath && !relative(projectDir, filePath).startsWith("..")) {
  const run = (bin, args) => {
    try {
      execFileSync(`${projectDir}/node_modules/.bin/${bin}`, args, {
        cwd: projectDir,
        stdio: "ignore",
      });
    } catch {
      // Lint errors that can't be auto-fixed are caught by `npm run check`.
    }
  };
  if (FORMATTABLE.test(filePath)) run("prettier", ["--write", "--ignore-unknown", filePath]);
  if (LINTABLE.test(filePath)) run("eslint", ["--fix", filePath]);
}
