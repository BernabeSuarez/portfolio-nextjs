import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Bernabe <bernatattoo@gmail.com>",
      to: ["bernatattoo@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Bernabe" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
