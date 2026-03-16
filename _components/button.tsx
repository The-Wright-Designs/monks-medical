"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

import {
  primaryButtonStyles,
  defaultButtonStyles,
} from "@/_styles/button-styles";

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
  target?: string;
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
  target = "_self",
}: Props) => {
  const { pending } = useFormStatus();

  if (!additionalServices && link) {
    return (
      <Link
        href={link}
        className={primaryButtonStyles(backgroundColor, cssClasses)}
        target={target}
      >
        {children}
      </Link>
    );
  } else if (form) {
    return (
      <button
        type={type || "button"}
        className={primaryButtonStyles("black", cssClasses)}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={onClick}
      >
        {pending ? (
          <div className="grid place-items-center py-0.5">
            <div className="spinner"></div>
          </div>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={defaultButtonStyles(cssClasses)}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
};

export default Button;
