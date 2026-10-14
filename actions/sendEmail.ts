"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import { createElement } from "react";
import ContactFormEmail from "@/email/ContactFormEmail";

export default async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!validateString(senderEmail, 100)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  if (!process.env.RESEND_API_KEY) {
    return { error: "Email service is not configured." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jonathanmiranda2003@gmail.com",
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail,
      react: createElement(ContactFormEmail, {
        senderEmail,
        message,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
}