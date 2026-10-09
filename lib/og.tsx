import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import { COLORS } from "@/lib/theme";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
export const OG_IMAGE_CONTENT_TYPE = "image/png";

const LONG_TITLE_LENGTH = 40;
const TITLE_FONT_SIZE = { short: 80, long: 58 } as const;

type OgImageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function renderOgImage({ eyebrow, title, subtitle }: OgImageProps) {
  const titleSize =
    title.length > LONG_TITLE_LENGTH ? TITLE_FONT_SIZE.long : TITLE_FONT_SIZE.short;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 72,
          color: COLORS.ink,
          background: COLORS.ground,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 2, background: COLORS.copper }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: COLORS.copper,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: COLORS.inkMuted }}>{subtitle}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${COLORS.surface}`,
            paddingTop: 24,
            fontSize: 20,
            color: COLORS.inkMuted,
          }}
        >
          <span>{SITE.name}</span>
          <span>{SITE.role}</span>
        </div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
