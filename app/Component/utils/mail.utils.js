// // import { formatRevalidate } from "next/dist/server/lib/revalidate";
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const { name, subject, email, phone, message } = await request.json();

//     const transporter = nodemailer.createTransport({
//       service: "gmail   ",
//       host: "smtpro.zoho.in",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "sanjaysumithra2004@gmail.com",
//         pass: process.env.NEXT_PUBLIC_PASSWORD,
//       },
//     });

//     const mailOption = {
//       from: "sanjaysumithra2004@gmail.com",
//       to: "mr.sanjay.official.in@gmail.com",
//       subject: "Send email",
//       html: `<h3>Hello Augustine</h3><li>title : ${name}</li><li>message : ${subject}</li><li>title : ${email}</li><li>title : ${phone}</li><li>title : ${message}</li>`,
//     };

//     await transporter.sendMail(mailOption);

//     return NextResponse.json(
//       { message: "Email sent Successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, subject, email, phone, message } = req.body;

//     let transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: false,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     let mailOptions = {
//       from: `"Your Name" <${process.env.EMAIL_USER}>`,
//       name: name,

//       subject: subject,
//       email: email,
//       phone: phone,
//       message: message,
//     };

//     try {
//       let info = await transporter.sendMail(mailOptions);
//       console.log("Message sent: %s", info.messageId);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, subject, email, phone, message } = await req.json();

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: `"Sanjay" <${process.env.EMAIL_USER}>`,
    name: "string",
    subject: subject,
    email: email,
    phone: phone,
    message: message,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
