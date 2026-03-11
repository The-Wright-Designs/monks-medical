"use client";

import Link from "next/link";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { showPhoneNumber } from "@/_actions/contact-actions";

const ShowPhoneNumber = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showPhoneLoading, setShowPhoneLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleShowPhoneNumber = async () => {
    if (!executeRecaptcha) return;
    setShowPhoneLoading(true);
    try {
      const token = await executeRecaptcha("show_phone");
      const phoneNumber = await showPhoneNumber(token);
      setShowPhone(phoneNumber);
    } catch {
      setRecaptchaError(true);
    }
    setShowPhoneLoading(false);
  };

  if (recaptchaError) {
    return <p className="italic text-error">reCAPTCHA failed</p>;
  }

  if (showPhone === "Show phone number") {
    return (
      <button
        className="font-light text-link italic p-2 -m-2 cursor-pointer hover:desktopSmall:text-brown desktopSmall:p-0 desktopSmall:m-0 desktop:hover:cursor-pointer"
        onClick={handleShowPhoneNumber}
        aria-label="Show phone number"
      >
        {showPhoneLoading ? <div className="spinner-small"></div> : showPhone}
      </button>
    );
  }

  return (
    <Link
      href={`tel:${showPhone}`}
      className="text-link font-light p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0"
    >
      {showPhone}
    </Link>
  );
};

export default ShowPhoneNumber;
