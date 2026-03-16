"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classNames from "classnames";

import data from "@/_data/nav-data.json";

interface Props {
  onClick?: () => void;
  cssClasses?: string;
  isOpen?: boolean;
}

const MobileMenuToggle = ({ onClick, cssClasses, isOpen }: Props) => {
  const currentRoute = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) setOpenIndex(null);
  }, [isOpen]);

  return (
    <nav className={cssClasses}>
      <ul>
        {data.map(({ title, link, submenu }, index) => (
          <li
            key={index}
            className={classNames("py-2 text-left", {
              "border-b-2 border-lightBrown": index !== data.length - 1,
            })}
          >
            {submenu ? (
              <>
                <button
                  className={classNames(
                    "text-[1.15rem] font-light p-2 -m-2 w-full text-left flex justify-between items-center desktop:hover:cursor-pointer",
                    { "font-medium": currentRoute === link },
                  )}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {title}
                  <span className="text-[1.15rem]">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <ul
                  className={classNames(
                    "flex flex-col items-start gap-1 pl-4 overflow-hidden transition-all delay-75 duration-300 ease-in-out",
                    openIndex === index ? "max-h-[500px] mt-2" : "max-h-0",
                  )}
                >
                  {submenu.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="text-[1rem] font-light block py-1 px-1 -mx-1"
                        onClick={onClick}
                      >
                        {item.jobTitle}
                        {item.physioName && ` - ${item.physioName}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={link}
                className={classNames("text-[1.15rem] font-light p-2 -m-2", {
                  "font-medium": currentRoute === link,
                })}
                onClick={onClick}
              >
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenuToggle;
