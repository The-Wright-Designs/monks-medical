"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import classNames from "classnames";

import data from "@/_data/nav-data.json";

interface Props {
  onClick?: () => void;
  cssClasses?: string;
}

const MobileMenuToggle = ({ onClick, cssClasses }: Props) => {
  const currentRoute = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                {openIndex === index && (
                  <ul className="mt-2 flex flex-col items-start gap-1 pl-4">
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
                )}
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
