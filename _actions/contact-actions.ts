"use server";

import data from "@/_data/general-data.json";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

const {
  homePage: {
    contact: { email, phone },
  },
} = data;

export const showEmailAddress = async (
  recaptchaToken: string
): Promise<string> => {
  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
  if (!recaptchaResult.success) {
    throw new Error(recaptchaResult.error || "reCAPTCHA verification failed");
  }
  return email;
};

export const showPhoneNumber = async (
  recaptchaToken: string
): Promise<string> => {
  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
  if (!recaptchaResult.success) {
    throw new Error(recaptchaResult.error || "reCAPTCHA verification failed");
  }
  return phone;
};
