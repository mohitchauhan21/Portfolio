import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#fcf9f8",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1c1b1b",
          fontFamily: "serif",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        MC
      </div>
    ),
    {
      ...size,
    }
  );
}
