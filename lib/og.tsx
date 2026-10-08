import { ImageResponse } from "next/og";
import { COLORS } from "@/lib/theme";

/** Shared by every `opengraph-image.tsx` route so they all export the same dimensions. */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
export const OG_IMAGE_CONTENT_TYPE = "image/png";

const LONG_TITLE_LENGTH = 40;
const TITLE_FONT_SIZE = { short: 76, long: 56 } as const;

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
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 80,
          color: COLORS.foreground,
          backgroundImage: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.card} 60%, #1e1b4b 100%)`,
        }}
      >
        <div style={{ width: 120, height: 6, background: COLORS.accent }} />
        <div style={{ marginTop: 32, fontSize: 28, color: COLORS.accent }}>{eyebrow}</div>
        <div style={{ marginTop: 20, fontSize: titleSize, fontWeight: 700, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: COLORS.muted }}>{subtitle}</div>
      </div>
    ),
    OG_IMAGE_SIZE
  );
}
