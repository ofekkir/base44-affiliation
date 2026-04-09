import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { app_name, app_url, app_description, target_audience, monthly_budget, email } = body

  if (!app_name || !app_url || !app_description || !target_audience || !monthly_budget || !email) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'HoopoeApps <noreply@hoopoeapps.com>',
    to: 'hello@hoopoeapps.com',
    replyTo: email,
    subject: `New app submission: ${app_name}`,
    text: [
      `App name: ${app_name}`,
      `App URL: ${app_url}`,
      `Description: ${app_description}`,
      `Target audience: ${target_audience}`,
      `Monthly budget: ${monthly_budget}`,
      `Contact email: ${email}`,
    ].join('\n\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
