import Link from "next/link";
import Image from "next/image";

import data from "@/_data/nav-data.json";

const Footer = () => {
  return (
    <footer className="border-t-2 border-khaki mt-20">
      <div className="py-10 bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-450/monks-medical-53.jpg')] phone:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-650/monks-medical-53.jpg')] tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1150/monks-medical-53.jpg')] bg-cover bg-center max-w-[1100px] mx-auto relative px-8">
        <div className="hidden desktop:block bg-gradient-to-r from-white to-transparent w-8 absolute left-0 top-0 h-full"></div>
        <div className="grid gap-5 desktop:grid-cols-2 desktop:place-items-stretch desktop:gap-5">
          <div className="hidden desktop:block">
            <p className="font-medium mb-5">Navigation</p>
            <ul className="grid gap-1.5">
              {data.map(({ title, link }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    className="text-paragraph pb-1 -mb-[3px] hover:text-link ease-in-out duration-150 delay-75"
                  >
                    {title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-paragraph pb-1 -mb-[3px] hover:text-link ease-in-out duration-150 delay-75"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid gap-10 place-items-center desktop:place-items-end desktop:order-3 desktop:col-span-2 place-self-center">
            <Image
              src="/assets/icons/monks-medical-logo-2.svg"
              alt="Monk's Medical logo"
              width={100}
              height={124.49}
              className="desktop:hidden w-[100px] h-auto"
            />
            <Link
              className=" text-link font-light desktop:hidden"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
            <p className="flex flex-col gap-1 items-center desktop:flex-row desktop:gap-0">
              <Link
                href="https://www.monksmedical.com"
                className="font-light text-link desktop:hover:opacity-80 ease-in-out duration-300 p-2 -m-2 desktop:p-0 desktop:m-0"
              >
                www.monksmedical.com
              </Link>{" "}
              <span className="hidden mx-1 desktop:block">|</span>
              {"© Monk's Medical 2024"}
            </p>
          </div>
          <div className="desktop:grid gap-10 desktop:place-items-end">
            <Image
              src="/assets/icons/monks-medical-logo-2.svg"
              alt="Monk's Medical logo"
              width={67}
              height={83}
              className="hidden desktop:block w-[67px] h-auto"
            />
            <p className="flex flex-col gap-1 items-center font-thin desktop:items-end">
              Designed & developed by
              <Link
                href="https://www.thewrightdesigns.co.za"
                target="_blank"
                className="font-thin text-link desktop:hover:opacity-80 ease-in-out duration-300 p-2 -m-2 desktop:p-0 desktop:m-0"
              >
                The Wright Designs
              </Link>
            </p>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-transparent to-white w-8 absolute right-0 -top-0 h-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
