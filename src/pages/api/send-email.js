import nodemailer from "nodemailer";
require("dotenv").config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message, date, place, phone, quantity } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "dolores.polito@gmail.com",
      subject: `Mensaje de ${name}`,
      text: `
      Hola Olivia Pollitzer.

      Tenes una consulta de ${name}, email: ${email}.

      ${message}.
      
      
      Saludos.`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).end();
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
