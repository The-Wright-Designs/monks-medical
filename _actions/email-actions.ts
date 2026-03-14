"use server";

import nodemailer from "nodemailer";
import { emailTemplateHtml } from "@/_lib/email-template-html";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

export async function sendEmail(
  formData: FormData
): Promise<{ success: boolean }> {
  const honey = formData.get("honey");

  if (honey !== "") {
    return { success: false };
  }

  const recaptchaToken = formData.get("recaptchaToken") as string;
  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);

  if (!recaptchaResult.success) {
    return { success: false };
  }

  try {
    const name = formData.get("name") as string;
    const phone = formData.get("tel") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const bookWith = formData.get("bookWith") as string;

    const emailHtmlContent = emailTemplateHtml({
      name,
      phone,
      email,
      message,
      bookWith,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      requireTLS: true,
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: bookWith.includes("Heilet") ? process.env.SMTP_SEND_TO_HEILET : process.env.SMTP_SEND_TO,
      subject: "Website form submission - Monk's Medical",
      replyTo: email,
      html: emailHtmlContent,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
