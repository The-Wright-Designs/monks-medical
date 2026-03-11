import Image from "next/image";

import classNames from "classnames";

import Button from "@/_components/button";

import data from "@/_data/general-data.json";

const AboutComponent = () => {
  const {
    homePage: {
      about: { paragraphs, teamImage, images },
    },
  } = data;

  return (
    <main className="grid gap-10 py-20 bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-450/monks-medical-51.jpg')] phone:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-650/monks-medical-51.jpg')] tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1150/monks-medical-51.jpg')] desktop:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1750/monks-medical-51.jpg')]">
      <div className="grid gap-10 desktop:grid-cols-[1fr_2fr]">
        <h2 className="desktop:hidden">Who We Are</h2>
        <Image
          src={teamImage}
          alt="Monks Medical team"
          className="aspect-video desktop:order-last"
          width={1280}
          height={700}
          sizes="(max-width:1280px) 100vw, 600px"
        />
        <div className="grid gap-4">
          <h2 className="hidden desktop:block mb-6">Who We Are</h2>
          {paragraphs.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <Button
            link="#contact"
            backgroundColor="green"
            cssClasses="mt-6 desktop:mr-auto"
            ariaLabel="Book a consultation via our contact form"
          >
            Book a consultation
          </Button>
        </div>
      </div>
      <div className="grid gap-10 desktop:grid-cols-[2fr_1.25fr]">
        <div className="grid gap-4">
          <h3 className="mb-6">Our integrated team includes:</h3>
          <ul className="list-disc text-left pl-4">
            <li>
              Two on-site physiotherapists managing injury, rehabilitation,
              chronic pain and movement optimisation
            </li>
            <li>
              A dedicated sonographer providing high-quality diagnostic
              ultrasound services
            </li>
            <li>
              A professional nurse offering pregnancy monitoring, baby wellness
              checks and childhood vaccination programmes
            </li>
          </ul>
          <p>
            This collaborative structure allows patients to receive coordinated,
            comprehensive care under one roof, ensuring continuity and clinical
            alignment across all aspects of their health.
          </p>
          <p>
            In addition to comprehensive general practice, Dr Rorke has
            developed focused clinical expertise in preventive, metabolic and
            performance medicine. Through continued professional development and
            the integration of advanced therapeutic modalities, the practice
            supports patients not only in managing illness but in optimising
            health outcomes.
          </p>
          <Button
            link="#contact"
            backgroundColor="light brown"
            ariaLabel="Meet the team page"
            cssClasses="w-full mt-6 desktop:w-auto desktop:mr-auto"
          >
            Meet the team
          </Button>
          <div className="grid gap-10 mt-6 desktop:grid-cols-2">
            {images.slice(0, 2).map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`Monks Medical - ${index + 1}`}
                  width={1280}
                  height={700}
                  className="aspect-video"
                  sizes="(max-width:1280px) 100vw, 300px"
                />
              </div>
            ))}
          </div>
        </div>
        <Image
          src={images[2]}
          alt={`Monks Medical - 3`}
          width={600}
          height={400}
          className="hidden desktop:block"
        />
      </div>
    </main>
  );
};

export default AboutComponent;
