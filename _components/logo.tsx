import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";

interface Props {
  large?: boolean;
}

const Logo = ({ large }: Props) => {
  return (
    <Link href="/" className="flex items-end gap-1">
      <Image
        src="/assets/icons/monks-medical-logo.svg"
        alt="Monk's Medical Logo"
        priority
        width={60.69}
        height={40}
        className={classNames(" drop-shadow-none", {
          "w-[60.69px] h-[40px]": large,
          "w-[44px] h-[29px]": !large,
        })}
      />
      <h2
        className={classNames("", {
          "text-logoLarge w-[75px] -mb-[3px]": large,
          "text-logoSmall w-[56px] -mb-[3px]": !large,
        })}
      >
        {"Monk's Medical"}
      </h2>
    </Link>
  );
};

export default Logo;
