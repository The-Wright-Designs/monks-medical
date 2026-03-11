"use client";

import { useState, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import Link from "next/link";

import Button from "@/_components/button";
import { sendEmail } from "@/_actions/email-actions";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (showEmailSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  return (
    <div>
      {!showEmailSubmitted && (
        <p className="mb-5 italic min-[800px]:text-left">
          Please fill out the form below and we will be in touch ASAP...
        </p>
      )}
      {showEmailSubmitted ? (
        <>
          <div id="email-submitted"></div>
          <p className="italic">
            Your email has been sent, we will be in touch soon.
          </p>
        </>
      ) : submitError ? (
        <p className="italic text-error text-subheading">
          Something went wrong sending your message. Please try again or contact
          us directly.
        </p>
      ) : (
        <section
          className={`bg-brown px-7 -mx-7 py-10 min-[800px]:m-0 min-[800px]:p-7 min-[800px]:rounded-xl ${cssClasses}`}
        >
          <form
            action={async (formData) => {
              try {
                if (!executeRecaptcha) {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  if (!executeRecaptcha) {
                    setSubmitError(true);
                    return;
                  }
                }

                const recaptchaToken = await executeRecaptcha("contact_form");
                formData.append("recaptchaToken", recaptchaToken);

                const result = await sendEmail(formData);
                if (result.success) {
                  setShowEmailSubmitted(true);
                } else {
                  setSubmitError(true);
                }
              } catch (error) {
                console.error("Contact form error:", error);
                setSubmitError(true);
              }
            }}
            className="flex flex-col gap-8"
          >
            <input type="hidden" name="honey" className="hidden" />
            <label htmlFor="fullName" className="flex flex-col gap-2">
              Name:
              <input
                type="text"
                id="fullName"
                name="name"
                required
                placeholder="Full name"
                autoComplete="name"
              />
            </label>
            <label htmlFor="phoneNumber" className="flex flex-col gap-2">
              Phone:
              <input
                type="tel"
                id="phoneNumber"
                name="tel"
                placeholder="Phone number"
                autoComplete="tel"
              />
            </label>
            <label htmlFor="emailAddress" className="flex flex-col gap-2">
              Email:
              <input
                type="email"
                id="emailAddress"
                name="email"
                required
                placeholder="Email address"
                autoComplete="email"
              />
            </label>
            <label htmlFor="userMessage" className="flex flex-col gap-2">
              Message:
              <textarea
                id="userMessage"
                required
                rows={5}
                name="message"
                placeholder="Type your message here..."
              ></textarea>
            </label>
            <div className="flex flex-col gap-4">
              <Button
                form
                type="submit"
                cssClasses="hover:desktopSmall:opacity-90"
                ariaLabel="Submit form"
              >
                Submit
              </Button>
              <p className="text-[12px] font-thin">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="text-[12px] font-light text-link underline underline-offset-4 desktop:hover:opacity-85 ease-in-out duration-300"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="https://policies.google.com/terms"
                  target="_blank"
                  className="text-[12px] font-light text-link underline underline-offset-4 desktop:hover:opacity-85 ease-in-out duration-300"
                >
                  Terms of Service
                </Link>{" "}
                apply.
              </p>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default ContactForm;
