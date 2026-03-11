"use client";

import { useState, lazy, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

import { showEmailAddress, showPhoneNumber } from "@/_actions/actions";
import ContactForm from "./contact/contact-form";

import data from "@/_data/general-data.json";

const LazyContactMap = lazy(() => import("./contact/contact-map"));

const ContactComponent = () => {
  const {
    homePage: {
      contact: { phone, email, address, facebook, instagram },
    },
  } = data;

  const [showPhone, setShowPhone] = useState("Show phone number");
  const [showEmail, setShowEmail] = useState("Show email address");
  const [showPhoneLoading, setShowPhoneLoading] = useState(false);
  const [showEmailLoading, setShowEmailLoading] = useState(false);

  const handleShowPhoneNumber = async () => {
    setShowPhoneLoading(true);
    const phoneNumber = await showPhoneNumber();
    setShowPhone(phoneNumber);
    setShowPhoneLoading(false);
  };

  const handleShowEmailAddress = async () => {
    setShowEmailLoading(true);
    const emailAddress = await showEmailAddress();
    setShowEmail(emailAddress);
    setShowEmailLoading(false);
  };

  return (
    <section className="pt-20">
      <div className="grid gap-20 border-b border-black/25 pb-15 tablet:grid-cols-[1fr_225px] tablet:gap-10 min-[800px]:grid-cols-1">
        <div className="grid gap-10 min-[800px]:grid-cols-2">
          <Image
            src="/assets/images/monks-medical-41.jpg"
            alt="Monks Medical"
            width={600}
            height={400}
            className="w-full h-auto aspect-video"
          />
          <Image
            src="/assets/images/monks-medical-61.jpg"
            alt="Monks Medical"
            width={600}
            height={400}
            className="w-full h-auto aspect-video"
          />
        </div>
        <div className="max-w-[300px] mx-auto min-[800px]:hidden">
          <Image
            src="/assets/icons/monks-medical-stamp.png"
            alt="Monks Medical"
            width={300}
            height={300}
            className="tablet:object-contain"
          />
        </div>
      </div>
      <div id="contact" className=" desktopSmall:-translate-y-20"></div>
      <div className="grid gap-20 pt-20">
        <h2>Get In Touch</h2>
        <div className="relative">
          <ul className="grid gap-10 tablet:gap-7 desktopSmall:gap-5">
            <li className="grid gap-2 place-items-start font-medium phone:grid-cols-[75px_1fr]">
              Phone:
              {showPhone === "Show phone number" ? (
                <button
                  className="font-light text-link italic p-2 -m-2 cursor-pointer hover:desktopSmall:text-brown desktopSmall:p-0 desktopSmall:m-0"
                  onClick={handleShowPhoneNumber}
                  aria-label="Show phone number"
                >
                  {showPhoneLoading ? (
                    <div className="spinner-small"></div>
                  ) : (
                    showPhone
                  )}
                </button>
              ) : (
                <Link
                  href={`tel:${phone}`}
                  className="text-link font-light p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {showPhone}
                </Link>
              )}
            </li>
            <li className="grid gap-2 place-items-start font-medium phone:grid-cols-[75px_1fr]">
              Email:
              {showEmail === "Show email address" ? (
                <button
                  className="font-light text-link italic p-2 -m-2 cursor-pointer hover:desktopSmall:text-brown desktopSmall:p-0 desktopSmall:m-0"
                  onClick={handleShowEmailAddress}
                  aria-label="Show email address"
                >
                  {showEmailLoading ? (
                    <div className="spinner-small"></div>
                  ) : (
                    showEmail
                  )}
                </button>
              ) : (
                <Link
                  href={`mailto:${email}`}
                  className="text-link font-light p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0"
                >
                  {showEmail}
                </Link>
              )}
            </li>
            <li className="grid gap-2 place-items-start font-medium phone:grid-cols-[75px_1fr]">
              Address: <span className="text-left font-light ">{address}</span>
            </li>
          </ul>
          <div className="flex gap-10 desktopSmall:gap-5 mt-10 desktopSmall:mt-5">
            <Link
              href={facebook}
              className="p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0 hover:desktopSmall:opacity-9 ease-in-out duration-300"
              target="_blank"
            >
              <Image
                src="/assets/icons/facebook-icon.svg"
                alt="Facebook icon"
                width={40}
                height={40}
                className="w-9 h-9 drop-shadow-none desktopSmall:w-7 desktopSmall:h-7"
              />
            </Link>
            <Link
              href={instagram}
              className="p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0 hover:desktopSmall:opacity-90 ease-in-out duration-300"
              target="_blank"
            >
              <Image
                src="/assets/icons/instagram-icon.svg"
                alt="Instagram icon"
                width={40}
                height={40}
                className="w-9 h-9 drop-shadow-none desktopSmall:w-7 desktopSmall:h-7"
              />
            </Link>
          </div>
          <div className="hidden min-[800px]:block absolute top-0 right-0 h-full desktopSmall:h-[250px] desktopSmall:w-auto desktopSmall:-top-14">
            <Image
              src="/assets/icons/monks-medical-stamp.png"
              alt="Monks Medical"
              width={600}
              height={600}
              className="tablet:object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 pt-20 min-[800px]:grid grid-cols-2 min-[800px]:gap-10 desktopSmall:gap-20">
        <Suspense
          fallback={
            <div
              className={
                "border-2 bg-white text-black border-black text-[30px] grid place-items-center py-16 w-full h-full min-[800px]:order-2"
              }
            >
              Map loading...
            </div>
          }
        >
          <LazyContactMap cssClasses="w-full h-[400px] phone:h-[450px] tablet:h-[500px] min-[800px]:h-full min-h-[250px] min-[800px]:order-2" />
        </Suspense>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactComponent;
