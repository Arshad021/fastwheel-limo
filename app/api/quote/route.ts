import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '2525'),
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
    })

    const subject = data.subject ? `[${data.subject}] Quote Request` : `New quote request from ${data.name || 'Website'}`
    const text = Object.entries(data).map(([k,v])=>`${k}: ${v}`).join('\n')

    await transporter.sendMail({
      from: process.env.MAIL_FROM || 'noreply@fastwheellimo.com',
      to: process.env.MAIL_TO,
      subject,
      text
    })

    // Optional webhook
    if(process.env.WEBHOOK_URL){
      try{
        await fetch(process.env.WEBHOOK_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ source:'fastwheellimo', ...data }) })
      }catch(e){ console.error('Webhook failed', e) }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
