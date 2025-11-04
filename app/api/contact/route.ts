import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // ✅ Microsoft 365 SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || "smtp.office365.com",
      port: parseInt(process.env.MAIL_PORT || "587"), // must use TLS on 587
      secure: false, // false for TLS (STARTTLS)
      auth: {
        user: process.env.MAIL_USER, // your full Microsoft 365 email
        pass: process.env.MAIL_PASS, // app password or user password
      },
      tls: {
        ciphers: "TLSv1.2",
      },
    })

    // ✅ Email details
    const mailOptions = {
      from: `"FastWheel Limo" <${process.env.MAIL_FROM || process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER, // receiver address
      subject: `📨 New Contact from ${data.name || "Website Visitor"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Message:</b></p>
        <p>${data.message}</p>
      `,
    }

    // ✅ Send email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 500 })
  }
}
