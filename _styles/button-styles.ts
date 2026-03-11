import classNames from "classnames";

type BackgroundColor = "brown" | "green" | "khaki" | "black" | "light brown";

export const primaryButtonStyles = (
  backgroundColor: BackgroundColor = "black",
  cssClasses?: string,
) =>
  classNames(
    "px-7 pt-4 pb-[14px] text-center rounded-lg uppercase text-button ease-in-out duration-300 desktop:hover:cursor-pointer desktop:hover:opacity-90",
    cssClasses,
    {
      "bg-brown text-white": backgroundColor === "brown",
      "bg-green text-white": backgroundColor === "green",
      "bg-khaki text-white": backgroundColor === "khaki",
      "bg-black text-white": backgroundColor === "black",
      "bg-lightBrown text-black": backgroundColor === "light brown",
    },
  );

export const defaultButtonStyles = (cssClasses?: string) =>
  classNames(
    "text-paragraph min-[800px]:px-2.5 pt-[10px] pb-2 rounded desktop:hover:opacity-80 desktop:rounded-none desktop:hover:cursor-pointer",
    cssClasses,
  );
