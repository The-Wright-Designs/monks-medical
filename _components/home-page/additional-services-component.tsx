"use client";

import { useState } from "react";
import Image from "next/image";

import classNames from "classnames";

import Button from "../button";

import data from "@/_data/general-data.json";

const AdditionalServicesComponent = () => {
  const {
    homePage: {
      services: { additional },
    },
  } = data;

  const [showTitle, setShowTitle] = useState("Nutritional Counselling");

  return (
    <div className="grid gap-15 desktopSmall:grid-cols-[155px_325px_1fr]">
      <h3 className="text-white text-[40px] desktopSmall:col-span-3">
        Additional Services
      </h3>
      <div className="grid gap-x-5 gap-y-5 grid-cols-2 min-[800px]:flex justify-around desktopSmall:flex-col desktopSmall:items-start desktopSmall:justify-normal desktopSmall:gap-y-8">
        {additional.map(({ title }, index) => (
          <Button
            key={index}
            additionalServices
            cssClasses={classNames("relative desktopSmall:text-left", {
              "text-white/75": showTitle !== title,
              "bg-lightBrown text-black": showTitle === title,
            })}
            onClick={() => setShowTitle(title)}
            ariaLabel={`Show ${title} services`}
          >
            {title}
            {showTitle === title && (
              <span
                className={classNames(
                  "hidden desktopSmall:block absolute -right-[25px] top-0",
                  {
                    "triangle-right-large": index < 2,
                    "triangle-right": index >= 2,
                  },
                )}
              ></span>
            )}
          </Button>
        ))}
      </div>
      <ul className="py-10 border-y-2 border-white/75 desktopSmall:border-none desktopSmall:py-0">
        {additional.map(({ title, paragraph }, index) => (
          <li
            key={index}
            className={classNames("flex flex-col gap-5", {
              hidden: showTitle !== title,
            })}
          >
            <h4 className="text-white text-[20px]">
              {showTitle === title ? title : ""}
            </h4>
            <p className="text-white text-paragraph">
              {showTitle === title ? paragraph : ""}
            </p>
          </li>
        ))}
      </ul>
      <div className="hidden desktopSmall:block">
        <Image
          src="/assets/images/monks-medical-39.jpg"
          alt="Monk's Medical by Dr Kyle Rorke - Additional Services"
          width={600}
          height={600}
          className="h-[275px] scale-x-[-1]"
        />
      </div>
    </div>
  );
};

export default AdditionalServicesComponent;
