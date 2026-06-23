export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('[Contact Form Submission]', body)
    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false }, { status: 400 })
  }
}
