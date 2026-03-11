"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

import classNames from "classnames";

interface Props {
  link?: string;
  children: React.ReactNode;
  backgroundColor?: "brown" | "green" | "khaki" | "black" | "light brown";
  cssClasses?: string;
  additionalServices?: boolean;
  onClick?: () => void;
  form?: boolean;
  disabled?: boolean;
  type?: "submit";
  ariaLabel: string;
}

const Button = ({
  link,
  children,
  backgroundColor = "brown",
  cssClasses,
  additionalServices,
  onClick,
  form,
  disabled,
  type,
  ariaLabel,
}: Props) => {
  const { pending } = useFormStatus();

  if (!additionalServices && link) {
    return (
      <Link
        href={link}
        className={classNames(
          `px-7 pt-[19px] pb-4 text-center rounded-lg uppercase text-button hover:desktopSmall:opacity-90 ease-in-out duration-300 ${cssClasses}`,
          {
            "bg-brown text-white": backgroundColor === "brown",
            "bg-green text-white": backgroundColor === "green",
            "bg-khaki text-white": backgroundColor === "khaki",
            "bg-black text-white": backgroundColor === "black",
            "bg-lightBrown text-black": backgroundColor === "light brown",
          }
        )}
      >
        {children}
      </Link>
    );
  } else if (form) {
    return (
      <button
        type={type || "button"}
        className={`px-7 pt-[17px] pb-4 text-center rounded-lg uppercase text-button bg-black text-white ${cssClasses}`}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
      >
        {pending ? <div className="spinner"></div> : <>{children}</>}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`text-paragraph min-[800px]:px-2.5 pt-[10px] pb-2 rounded desktopSmall:hover:text-white desktopSmall:rounded-none ease-in-out ${cssClasses}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
};

export default Button;
