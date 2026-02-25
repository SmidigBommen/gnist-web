import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Navn, e-post og melding er påkrevd." },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend or another email service
    // For now, log the message
    console.log("Contact form submission:", { name, email, company: body.company, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Kunne ikke behandle forespørselen." },
      { status: 500 }
    );
  }
}
