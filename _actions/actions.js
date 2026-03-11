"use server";

import data from "@/_data/general-data.json";
import nodemailer from "nodemailer";
import { emailTemplateHtml } from "@/_lib/email-template-html";

export async function sendEmail(formData) {
  const honey = formData.get("honey");

  if (honey !== "") {
    return { success: false };
  }

  try {
    const name = formData.get("name");
    const phone = formData.get("tel");
    const email = formData.get("email");
    const message = formData.get("message");

    const emailHtmlContent = emailTemplateHtml({
      name,
      phone,
      email,
      message,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      requireTLS: true,
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_SEND_TO,
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

const {
  homePage: {
    contact: { email, phone },
  },
} = data;

export const showEmailAddress = async () => {
  return email;
};

export const showPhoneNumber = async () => {
  return phone;
};
