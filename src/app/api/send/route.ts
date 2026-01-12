import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";


const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // ✅ MOVED HERE: Initialize inside the function to prevent build errors
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();
    const { success, data, error } = EmailSchema.safeParse(body);

    if (!success) {
      return Response.json({ error: error?.message }, { status: 400 });
    }

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [config.email],
      subject: `New Message from ${data.fullName} | Portfolio`,
      react: EmailTemplate({
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      }),
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