"use client";

import { useState, useEffect } from "react";

import classNames from "classnames";
import Button from "@/_components/button";
import Recaptcha from "@/_lib/recaptcha";
import { sendEmail } from "@/_actions/actions";

interface Props {
  cssClasses?: string;
}

const ContactForm = ({ cssClasses }: Props) => {
  const [submissionStartTime, setSubmissionStartTime] = useState(0);
  const [validateRecaptcha, setValidateRecaptcha] = useState(false);
  const [showEmailSubmitted, setShowEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const startSubmissionTimer = () => {
      setSubmissionStartTime(new Date().getTime());
    };
    startSubmissionTimer();
    if (showEmailSubmitted) {
      const element = document.getElementById("email-submitted");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showEmailSubmitted]);

  const handleRecaptchaChange = (value: any) => {
    if (value === null) {
      setValidateRecaptcha(false);
      console.log("Recaptcha expired");
    } else {
      const elapsedTime = new Date().getTime() - submissionStartTime;
      if (elapsedTime < 3000) {
        console.error("Form submitted too quickly. Possible bot activity.");
        return;
      } else {
        setValidateRecaptcha(!!value);
      }
    }
  };

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
        <p className="italic">
          Something went wrong sending your message. Please try again or contact us directly.
        </p>
      ) : (
        <section
          className={`bg-brown px-7 -mx-7 py-10 min-[800px]:m-0 min-[800px]:p-7 min-[800px]:rounded-xl ${cssClasses}`}
        >
          <form
            action={async (formData) => {
              const result = await sendEmail(formData);
              if (result.success) {
                setShowEmailSubmitted(true);
              } else {
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
            <Button
              form
              type="submit"
              cssClasses={classNames("", {
                "opacity-50 desktopSmall:cursor-not-allowed":
                  !validateRecaptcha,
                "hover:desktopSmall:opacity-90": validateRecaptcha,
              })}
              disabled={!validateRecaptcha}
              ariaLabel="Submit form"
            >
              Submit
            </Button>
            <Recaptcha onChange={handleRecaptchaChange} />
          </form>
        </section>
      )}
    </div>
  );
};

export default ContactForm;
