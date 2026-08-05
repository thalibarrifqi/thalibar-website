"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { validateString, validateEmail, getErrorMessage } from "@/lib/utils";
import { ratelimit } from "@/lib/ratelimit";
import { EMAIL_MAX_LENGTH, MESSAGE_MAX_LENGTH } from "@/lib/constants";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, EMAIL_MAX_LENGTH)) return { error: "Invalid sender email" };
  if (!validateEmail(senderEmail)) return { error: "Invalid email format" };
  if (!validateString(message, MESSAGE_MAX_LENGTH)) return { error: "Invalid message" };

  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return { error: "Too many requests. Please try again later." };
  }

  try {
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
      html: emailHtml,
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};