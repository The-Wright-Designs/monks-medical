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
  return (
    <nav className={cssClasses}>
      <ul>
        {data.map(({ title, link }, index) => (
          <li
            key={index}
            className={classNames("py-2.5 text-left", {
              "border-b-2 border-lightBrown": index !== data.length - 1,
            })}
          >
            <Link
              href={link}
              className={classNames("text-[1.25rem] font-light p-2 -m-2", {
                "font-medium": currentRoute === link,
              })}
              onClick={onClick}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenuToggle;
