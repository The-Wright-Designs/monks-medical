import DripItems from "../../_components/drips-page/drip-item";

import data from "@/_data/general-data.json";

const Drips = () => {
  const { dripsPage } = data;

  return (
    <div className="mt-20 grid gap-20">
      <div className="pb-2 border-b-[3px] border-green relative max-w-[650px]">
        <h2 className="text-left">Revitalize Drip Menu</h2>
        <h3 className="font-thin mt-2 text-left">ImmunoBoost Infusion</h3>
        <svg
          width="52"
          height="24"
          viewBox="0 0 52 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-[13.5px] -right-1"
        >
          <path
            d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807612 39.9792 0.807612 39.3934 1.3934C38.8076 1.97918 38.8076 2.92893 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM0 13.5H50V10.5H0V13.5Z"
            fill="#A6B2A9"
          />
        </svg>
      </div>
      <DripItems data={dripsPage} cssClasses="" />
    </div>
  );
};

export default Drips;
