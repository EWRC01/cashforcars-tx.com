import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Log the lead data (in production, save to database)
    console.log("[v0] Lead submission received:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      vehicle: `${body.year} ${body.make} ${body.model}`,
      condition: body.condition,
      city: body.city,
      locale: body.locale,
      sourcePath: body.sourcePath,
      utm_source: body.utm_source,
      utm_medium: body.utm_medium,
      utm_campaign: body.utm_campaign,
      gclid: body.gclid,
      timestamp: new Date().toISOString(),
    })

    // Simulate validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Simulate success response
    return NextResponse.json({ success: true, message: "Lead submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Lead submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
