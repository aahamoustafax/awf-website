import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Heading, Stat, StatList } from "@/components/ui";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins truthy class names and skips falsy ones", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });
});

describe("buttonClasses", () => {
  it("defaults to the primary variant at medium size", () => {
    expect(buttonClasses()).toContain("bg-primary");
    expect(buttonClasses()).toContain("px-5");
  });

  it("uses the saffron call-to-action colours for the cta variant", () => {
    expect(buttonClasses({ variant: "cta" })).toContain("bg-cta");
  });
});

describe("Heading", () => {
  it("keeps the semantic level independent of the visual size", () => {
    render(
      <Heading level={2} size="sm">
        Programs
      </Heading>,
    );
    const heading = screen.getByRole("heading", { level: 2, name: "Programs" });
    expect(heading.className).toContain("text-display-sm");
  });
});

describe("Stat", () => {
  it("pairs each figure with its label in a description list", () => {
    render(
      <StatList>
        <Stat value="4" label="Programs" />
      </StatList>,
    );
    expect(screen.getByRole("term").textContent).toBe("Programs");
    expect(screen.getByRole("definition").textContent).toBe("4");
  });
});
