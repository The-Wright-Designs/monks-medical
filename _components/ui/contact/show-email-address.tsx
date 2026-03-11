"use client";

import Link from "next/link";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { showEmailAddress } from "@/_actions/contact-actions";

const ShowEmailAddress = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showEmailLoading, setShowEmailLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleShowEmailAddress = async () => {
    if (!executeRecaptcha) return;
    setShowEmailLoading(true);
    try {
      const token = await executeRecaptcha("show_email");
      const emailAddress = await showEmailAddress(token);
      setShowEmail(emailAddress);
    } catch {
      setRecaptchaError(true);
    }
    setShowEmailLoading(false);
  };

  if (recaptchaError) {
    return <p className="italic text-error">reCAPTCHA failed</p>;
  }

  if (showEmail === "Show email address") {
    return (
      <button
        className="font-light text-link italic p-2 -m-2 cursor-pointer hover:desktopSmall:text-brown desktopSmall:p-0 desktopSmall:m-0 desktop:hover:cursor-pointer"
        onClick={handleShowEmailAddress}
        aria-label="Show email address"
      >
        {showEmailLoading ? <div className="spinner-small"></div> : showEmail}
      </button>
    );
  }

  return (
    <Link
      href={`mailto:${showEmail}`}
      className="text-link font-light p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0"
    >
      {showEmail}
    </Link>
  );
};

export default ShowEmailAddress;
