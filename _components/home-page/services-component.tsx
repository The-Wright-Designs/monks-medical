import Image from "next/image";

import AdditionalServicesComponent from "./additional-services-component";

import data from "@/_data/general-data.json";

const ServicesComponent = () => {
  const {
    homePage: {
      services: { general },
    },
  } = data;

  return (
    <section className="bg-black -mx-7 px-7 py-20 grid gap-15 desktopSmall:px-[200px] desktopSmall:-mx-[200px]">
      <div className="grid gap-15">
        <h2 className="text-white">Services</h2>
        <ul className="grid gap-15 border-b border-white/25 pb-15 min-[800px]:grid-cols-2 desktopSmall:grid-cols-4">
          {general.map(({ image, title, paragraph }, index) => (
            <li
              key={index}
              className="grid desktopSmall:place-content-start desktopSmall:grid-rows-[140px_60px_1fr] gap-5"
            >
              <div className="h-[140px]">
                <Image
                  src={image}
                  alt={`${title} - Monks Medical by Dr Kyle Rorke | Plettenberg Bay`}
                  width={118}
                  height={118}
                  className="w-[118px] h-auto mb-5 mx-auto"
                />
              </div>
              <h3 className="text-white text-center">{title}</h3>
              <p className="text-white">{paragraph}</p>
            </li>
          ))}
        </ul>
      </div>
      <AdditionalServicesComponent />
    </section>
  );
};

export default ServicesComponent;
