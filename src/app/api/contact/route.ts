import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, phone, email, community, service, description, referral } = body

        // Forward to Zapier webhook for lead tracking
        try {
                await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                                      ...body,
                                      website: 'Concrete Pros of Prosper',
                                      submittedAt: new Date().toISOString(),
                          }),
                });
        } catch (zapierError) {
                console.error('[Zapier Webhook Error]', zapierError);
        }

    await resend.emails.send({
      from: 'Concrete Pros Of Prosper <onboarding@resend.dev>',
      to: 'riverinthemix@gmail.com',
      subject: `New Estimate Request: ${service} — ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Community</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${community}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Service Needed</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${service}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Description</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${description}</td></tr>
          ${referral ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e5e7eb;">Referral Source</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${referral}</td></tr>` : ''}
        </table>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return Response.json({ success: false }, { status: 500 })
  }
}
