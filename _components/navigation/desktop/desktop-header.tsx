import Link from "next/link";

import Logo from "../../logo";

import data from "@/_data/nav-data.json";
import classNames from "classnames";

const DesktopHeader = () => {
  return (
    <header className="hidden sticky top-0 z-50 w-full desktop:flex border-b-4 bg-white border-brown drop-shadow-default">
      <div className="flex w-full justify-between mx-auto max-w-[1100px] px-8 py-6 desktop:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1150/monks-medical-54.jpg')] bg-cover bg-center relative">
        <div className=" bg-gradient-to-r from-white to-transparent w-8 absolute left-0 top-0 h-full"></div>
        <Logo large />
        <ul className="flex gap-3 items-end -mb-1.5">
          {data.map(({ title, link, submenu }, index) => (
            <li key={index} className={submenu ? "relative group" : undefined}>
              <Link
                href={link}
                className={classNames(
                  "text-paragraph pb-1 -mb-[3px] ease-in-out duration-[50ms] delay-75",
                  !submenu ? "hover:border-b-[2px] border-khaki" : undefined,
                )}
              >
                {title}
              </Link>
              {submenu && (
                <ul className="flex flex-col absolute top-6.5 left-0 bg-white min-w-max z-50 py-2 overflow-hidden max-h-0 group-hover:max-h-96 transition-[max-height] duration-500 ease-in-out delay-75 rounded-b-[8px]">
                  {submenu.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.link}
                        className="text-paragraph block px-4 py-1.5 desktop:hover:bg-lightBrown/30 ease-in-out duration-300"
                      >
                        {item.jobTitle}
                        {item.physioName && (
                          <span className="italic"> - {item.physioName}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className=" bg-gradient-to-r from-transparent to-white w-8 absolute right-0 -top-0 h-full"></div>
      </div>
    </header>
  );
};

export default DesktopHeader;
