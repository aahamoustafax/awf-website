import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { getSite } from "@/lib/content";

/**
 * Social share preview (1200×630) used by every page unless a page defines its own: navy card
 * with the logo, name and tagline. Generated at build time.
 */
export const alt =
  "Azan Welfare Foundation: bridging the gap, supporting healthcare, changing lives";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = join(process.cwd(), "src/assets/fonts");

export default async function OpenGraphImage() {
  const [site, fraunces, inter, logoFile] = await Promise.all([
    getSite(),
    readFile(join(fonts, "Fraunces-SemiBold.ttf")),
    readFile(join(fonts, "Inter-Medium.ttf")),
    readFile(join(process.cwd(), "public/images/logo-white-text.png")),
  ]);
  const logo = `data:image/png;base64,${logoFile.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#0b2545",
        color: "#ffffff",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only renders <img>. */}
        <img src={logo} alt="" width={150} height={140} />
        <div style={{ fontFamily: "Fraunces", fontSize: 36 }}>{site.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ fontFamily: "Fraunces", fontSize: 72, lineHeight: 1.05, maxWidth: 950 }}>
          Bridging the gap. Supporting healthcare. Changing lives.
        </div>
        <div
          style={{
            display: "flex",
            width: 140,
            height: 6,
            borderRadius: 3,
            background: "linear-gradient(90deg, #4a9fd8, #e9a93a)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 26,
          color: "#4a9fd8",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Hamilton, Canada · Afghanistan
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
        { name: "Inter", data: inter, style: "normal", weight: 500 },
      ],
    },
  );
}
