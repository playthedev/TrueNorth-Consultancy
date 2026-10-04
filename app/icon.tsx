import { ImageResponse } from "next/og"

export const size = {
  width: 64,
  height: 64,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #818cf8, #3a3df5)",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36">
          <path d="M18 3 L28 33 L18 26 L8 33 Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
