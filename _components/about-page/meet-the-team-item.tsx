"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import Button from "@/_components/button";

interface Props {
  name: string;
  bio: string[];
  imageUrl: string;
  jobTitle: string;
  bookWithValue: string;
  id?: string;
  imageLeft?: boolean;
  cssClasses?: string;
}

const MeetTheTeamItem = ({
  name,
  jobTitle,
  bookWithValue,
  bio,
  imageUrl,
  id,
  imageLeft,
  cssClasses,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const totalChars = bio.join("").length;
  const isLong = totalChars > 950;

  return (
    <article
      id={id}
      className={classNames(
        "flex flex-col gap-10 desktop:flex-row desktop:items-start scroll-mt-28 desktop:scroll-mt-36",
        cssClasses,
      )}
    >
      <div
        className={classNames(
          "flex flex-col gap-5 desktop:flex-1 desktop:justify-between",
          expanded || !isLong ? "desktop:h-auto" : "desktop:h-[439px]",
        )}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <h3>{name}</h3>
            <h4 className="px-2 py-1 font-light text-[13px] bg-brown rounded text-white self-start">
              {jobTitle}
            </h4>
          </div>
          <div className="relative aspect-[333/439] w-full desktop:hidden">
            <Image src={imageUrl} alt={name} fill />
          </div>
          <div
            className={classNames(
              "relative flex flex-col gap-4 overflow-hidden",
              expanded || !isLong ? "" : "h-[400px] desktop:h-[220px]",
            )}
          >
            {bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {!expanded && isLong && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
          {isLong && (
            <Link
              href="#"
              className="text-link font-light -mt-5 desktop:hover:opacity-85 ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                setExpanded(!expanded);
              }}
            >
              {expanded ? "- Read less" : "+ Read more"}
            </Link>
          )}
        </div>
        <Button
          backgroundColor={!imageLeft ? "green" : "light brown"}
          link={`/?bookWith=${encodeURIComponent(bookWithValue)}#contact-form`}
          ariaLabel="Book a consultation"
          cssClasses="desktop:self-start"
        >
          Book a consultation
        </Button>
      </div>
      <div
        className={classNames(
          "relative hidden desktop:block desktop:w-[333px] desktop:shrink-0 desktop:h-[439px] desktop:aspect-auto",
          imageLeft ? "desktop:order-first" : "desktop:order-last",
        )}
      >
        <Image src={imageUrl} alt={name} fill />
      </div>
    </article>
  );
};

export default MeetTheTeamItem;
