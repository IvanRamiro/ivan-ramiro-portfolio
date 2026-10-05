import { ImageResponse } from "next/og";

const SIZE = { width: 1200, height: 630 };
const LONG_TITLE_LENGTH = 40;

type OgImageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function renderOgImage({ eyebrow, title, subtitle }: OgImageProps) {
  const titleSize = title.length > LONG_TITLE_LENGTH ? 56 : 76;

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
          color: "#e6e9f0",
          backgroundImage: "linear-gradient(135deg, #0b0f19 0%, #111827 60%, #1e1b4b 100%)",
        }}
      >
        <div style={{ width: 120, height: 6, background: "#38bdf8" }} />
        <div style={{ marginTop: 32, fontSize: 28, color: "#38bdf8" }}>{eyebrow}</div>
        <div style={{ marginTop: 20, fontSize: titleSize, fontWeight: 700, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#94a3b8" }}>{subtitle}</div>
      </div>
    ),
    SIZE
  );
}