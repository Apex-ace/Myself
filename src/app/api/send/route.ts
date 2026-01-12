import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate the input data
    const { success, data, error } = EmailSchema.safeParse(body);

    if (!success) {
      return Response.json({ error: error?.message }, { status: 400 });
    }

    // 2. Send the email using Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      // "onboarding@resend.dev" is the default testing domain.
      // Once you verify your own domain in Resend, you can change this to "contact@yourdomain.com"
      from: "Portfolio Contact <onboarding@resend.dev>", 
      
      // ⚠️ THIS IS WHERE THE EMAIL IS SENT
      to: [config.email], // This pulls "ayushmishra.pi@gmail.com" from your config
      
      subject: `New Message from ${data.fullName} | Portfolio`,
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
      // This sets the "Reply-To" header so you can hit reply in Gmail and it goes to the sender
      replyTo: data.email, 
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      return Response.json({ error: "Failed to send email via Resend" }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    console.error("Server Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}