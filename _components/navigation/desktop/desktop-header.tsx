import Link from "next/link";

import Logo from "../../logo";

import data from "@/_data/nav-data.json";

const DesktopHeader = () => {
  return (
    <header className="hidden sticky top-0 z-50 w-full desktopSmall:flex border-b-4 bg-white border-brown drop-shadow-default">
      <div className="flex w-full justify-between mx-auto max-w-[1100px] px-8 py-6 desktopSmall:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1150/monks-medical-54.jpg')] bg-cover bg-center relative">
        <div className=" bg-gradient-to-r from-white to-transparent w-8 absolute left-0 top-0 h-full"></div>
        <Logo large />
        <ul className="flex gap-3 items-end -mb-2">
          {data.map(({ title, link }, index) => (
            <li key={index}>
              <Link
                href={link}
                className="text-paragraph pb-1 -mb-[3px] hover:border-b-[3px] border-khaki ease-in-out duration-[50ms] delay-75"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" bg-gradient-to-r from-transparent to-white w-8 absolute right-0 -top-0 h-full"></div>
      </div>
    </header>
  );
};

export default DesktopHeader;
