import nodemailer from "nodemailer";

//configuracion para envio de emails

export async function sendMail({
  email,
  name,
  subject,
  message,
}: {
  email: string;
  name: string;
  subject: string;
  message: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }
  try {
    const sendResult = await transport.sendMail({
      from: email,
      to: SMTP_EMAIL,
      subject,
      html: `
      <p>Nombre : ${name}</p>
      <p>Email de: ${email}</p>
      
      <p>Message: ${message}</p>`,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
