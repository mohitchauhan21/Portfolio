import { ImageResponse } from "next/og";
import { profile, site } from "@/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  let urlHost = site.url;
  try {
    urlHost = new URL(site.url).host;
  } catch {
    urlHost = "mohitchauhan.dev";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fcf9f8",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              color: "#575e6f",
              marginBottom: 20,
              fontFamily: "sans-serif",
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              color: "#1c1b1b",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "serif",
            }}
          >
            {profile.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e5e2e1",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#575e6f",
              fontFamily: "sans-serif",
            }}
          >
            {urlHost}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#23395d",
              fontFamily: "sans-serif",
            }}
          >
            {profile.location}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
