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
      {data.map(({ title, link }, index) => (
        <li key={index}>
          <Link
            href={link}
            className="text-paragraph pb-1 -mb-[3px] hover:border-b-[3px] border-khaki ease-in-out duration-[50ms] delay-75"
            onClick={() => scrollIntoView(link)}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopHeaderMenu;
