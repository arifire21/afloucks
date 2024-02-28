import { DevEmailTemplate, VisitorEmailTemplate } from '@/components/email-templates';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:any) {
  try {
    const  body = await request.json()
    const {name, email, comment} = body
    const data = await resend.emails.send({
      from: 'Arianna <info@ariannaloucks.com>',
      // to: ['delivered@resend.dev'],
      to: [email],
      subject: `Hi, from Arianna\'s page!`,
      react: VisitorEmailTemplate({ name: name, comment: comment }),
      text:`Hi, ${name}! Thank you for reaching out! I\'ll get back to you soon. Here\'s what you wrote: ${comment}`
    });
    
    if(data.error){
        // console.log(data.error)
        // return(Response.json({message: data.error.name}))
        if(data.error.name === 'internal_server_error'){
          return new Response(
            JSON.stringify({
              message: `${data.error.name}: ${data.error.message}`,
            }),
            {
              headers: { 
                // ...corsHeaders,
                "Content-Type": "application/json",
              },
              status: 500
            }
          )
        }

        if(data.error.name === 'rate_limit_exceeded'){
          return new Response(
            JSON.stringify({
              message: `${data.error.name}: ${data.error.message}`,
            }),
            {
              headers: { 
                // ...corsHeaders,
                "Content-Type": "application/json",
              },
              status: 429
            }
          )
        }

        return new Response(
          JSON.stringify({
            message: `${data.error.name}: ${data.error.message}`,
          }),
          {
            headers: { 
              // ...corsHeaders,
              "Content-Type": "application/json",
            },
            status: 400
          }
        )
      // return Response.json(data.error)
    }

    const dataDev = await resend.emails.send({
      from: 'Arianna <info@ariannaloucks.com>',
      to: ['inquiries.afl@outlook.com'],
      subject: `New Email From Page!`,
      react: DevEmailTemplate({ name: name, email:email, comment: comment }),
      text:`${name}, ${email}, ${comment}`
    });
    
    // if(dataDev.error){
    //     console.log(dataDev.error)
    //     return(Response.json({message: dataDev.error.}))
    //   // return Response.json(data.error)
    // }
    // return Response.json(data);

    return new Response(
      JSON.stringify({
        message: "Email sent successfully",
      }),
      {
        headers: { 
          // ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200
      }
    )
  } catch (error) {
    // console.log('error: ' + error)
    return Response.json({ error });
  }
}
