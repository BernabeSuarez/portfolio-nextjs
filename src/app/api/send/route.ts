import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail!,
      to: [fromEmail, email],
      subject: subject,
      react: EmailTemplate({ subject, message }),
      text: "",
    });

    return NextResponse.json({ message: "email send OK!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
