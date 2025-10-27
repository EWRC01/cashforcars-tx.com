import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get("locale") || "en"

  const title = locale === "es" ? "Pagamos Efectivo por Tu Carro" : "We Pay Cash for Cars"

  const subtitle =
    locale === "es" ? "Cualquier marca y condición. Retiro el mismo día." : "Any make, any condition. Same-day pickup."

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "36px",
            color: "#0ea5e9",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "32px",
            color: "#e5e7eb",
          }}
        >
          <span>📞</span>
          <span>+1-555-123-4567</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
