import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company } = await req.json();

    if (!name || !email || !company) {
      return new Response("Missing fields", { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("[demo-request] No RESEND_API_KEY — logging:", { name, email, company });
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const inbox = process.env.CONTACT_INBOX_EMAIL ?? "hello@ops-flo.com";

    await resend.emails.send({
      from: "FloAssist <onboarding@resend.dev>",
      to: [inbox],
      replyTo: email,
      subject: `Demo Request from ${name} at ${company}`,
      html: `
        <h2>New Demo Request via FloAssist Chat</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><em>Submitted via the FloAssist chat widget.</em></p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/chat/demo]", err);
    return new Response("Internal server error", { status: 500 });
  }
}
