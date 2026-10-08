import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { getSite } from "@/lib/content";

/**
 * Social share preview (1200×630) used by every page unless a page defines its own: navy card
 * with the crescent mark, name and mission. Generated at build time.
 */
export const alt =
  "Azan Welfare Foundation: education, skills and care for families building a new life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fonts = join(process.cwd(), "src/assets/fonts");

export default async function OpenGraphImage() {
  const [site, fraunces, inter] = await Promise.all([
    getSite(),
    readFile(join(fonts, "Fraunces-SemiBold.ttf")),
    readFile(join(fonts, "Inter-Medium.ttf")),
  ]);

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
        {/* Crescent: a sky circle with an offset navy circle on top. */}
        <div style={{ display: "flex", position: "relative", width: 64, height: 64 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 6,
              width: 58,
              height: 58,
              borderRadius: 999,
              background: "#4a9fd8",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 18,
              top: -2,
              width: 48,
              height: 48,
              borderRadius: 999,
              background: "#0b2545",
            }}
          />
        </div>
        <div style={{ fontFamily: "Fraunces", fontSize: 36 }}>{site.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ fontFamily: "Fraunces", fontSize: 72, lineHeight: 1.05, maxWidth: 950 }}>
          Education, skills and care for families building a new life
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
