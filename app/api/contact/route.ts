import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message, budget, honeypot, securityAnswer, securityExpected } = body;

    // Honeypot spam check (bots will fill this field)
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, bot: true });
    }

    // Required fields check
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Security math verification
    if (String(securityAnswer).trim() !== String(securityExpected).trim()) {
      return NextResponse.json(
        { error: "Incorrect security verification answer" },
        { status: 400 }
      );
    }

    // Simulate sending email / storing in database
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("Contact form submitted successfully:", {
      name,
      email,
      service,
      message,
      budget,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
