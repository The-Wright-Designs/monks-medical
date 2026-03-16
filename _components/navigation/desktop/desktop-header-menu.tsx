"use client";

import Link from "next/link";

import data from "@/_data/nav-data.json";

const scrollIntoView = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const DesktopHeaderMenu = () => {
  return (
    <ul className="flex gap-3 items-end -mb-2">
      {data.map(({ title, link, submenu }, index) => (
        <li key={index} className="relative group">
          <Link
            href={link}
            className="text-paragraph pb-1 -mb-[3px] hover:border-b-[3px] border-khaki ease-in-out duration-[50ms] delay-75"
            onClick={() => scrollIntoView(link)}
          >
            {title}
          </Link>
          {submenu && (
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-md flex flex-col min-w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
              {submenu.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="text-paragraph block px-4 py-2 hover:bg-lightBrown/20 whitespace-nowrap"
                  >
                    {item.jobTitle}
                    {item.physioName && ` - ${item.physioName}`}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DesktopHeaderMenu;
