"use server";

import { Resend } from "resend";
import { render } from "@react-email/render"; // Import fungsi render
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) return { error: "Invalid sender email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };

  try {
    // Render komponen menjadi HTML string secara eksplisit
    const emailHtml = await render(
      React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    );

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "thalibarrifqi@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      html: emailHtml, // Pakai html, bukan react
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};