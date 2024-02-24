import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: { json: () => any; }) {
  try {
    const  body = await request.json()
    const {name, email, comment} = body
    const data = await resend.emails.send({
      from: 'Arianna <info@ariannaloucks.com>',
      // to: ['delivered@resend.dev'],
      to: [email],
      subject: `Hi, from Arianna\'s page!`,
      react: EmailTemplate({ name: name, comment: comment }),
      text:`Hi, ${name}! Thank you for reaching out! I'll get back to you soon. Here\'s what you wrote: ${comment}`
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
