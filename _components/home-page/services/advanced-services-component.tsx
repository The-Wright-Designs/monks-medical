import Image from "next/image";
import Link from "next/link";

import Button from "../../button";

import data from "@/_data/general-data.json";

const AdvancedServicesComponent = () => {
  const {
    homePage: {
      services: { advanced },
    },
  } = data;

  return (
    <div className="flex flex-col gap-10 items-start w-full desktop:flex-row">
      <div className="hidden desktop:block desktop:flex-1 self-stretch overflow-hidden">
        <Image
          src="/assets/images/home-page/services/advanced-services-monks-medical.jpg"
          alt="Advanced Services - Monks Medical by Dr Kyle Rorke | Plettenberg Bay"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 items-start w-full desktop:pb-10 desktop:flex-1 desktop:border-b desktop:border-white/25">
        <h3 className="text-white text-[40px]">Advanced</h3>
        <ul className="flex flex-col gap-3 w-full list-disc pl-6">
          {advanced.map(({ title, link }, index) => {
            const hasLink = link !== undefined;
            const content = (
              <span>
                {hasLink ? (
                  <span className="inline underline text-[20px] underline-offset-4 font-bold text-white desktop:group-hover:opacity-85 ease-in-out duration-300">
                    {title}
                    <Image
                      src="/assets/icons/li_external-link.svg"
                      alt="External link"
                      width={20}
                      height={20}
                      className="inline w-5 h-5 shrink-0 rounded-none drop-shadow-none ml-2 mb-0.5 desktop:group-hover:opacity-85 ease-in-out duration-300"
                    />
                  </span>
                ) : (
                  <span className="text-white text-[20px]">{title}</span>
                )}
              </span>
            );

            return (
              <li key={index} className="text-white">
                {hasLink && link ? (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group desktop:hover:cursor-pointer"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
        <Button
          link="/advanced"
          backgroundColor="green"
          ariaLabel="Learn more about advanced services"
          cssClasses="w-full desktop:w-auto"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AdvancedServicesComponent;
