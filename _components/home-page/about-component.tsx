import Image from "next/image";

import classNames from "classnames";

import Button from "@/_components/button";

import data from "@/_data/general-data.json";

const AboutComponent = () => {
  const {
    homePage: {
      about: { paragraphs, kylesImage, images },
    },
  } = data;

  return (
    <main className="grid gap-12 py-20 bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-450/monks-medical-51.jpg')] phone:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-650/monks-medical-51.jpg')] tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1150/monks-medical-51.jpg')] desktopSmall:bg-[url('https://ik.imagekit.io/thewrightdesigns/tr:q-55,w-1750/monks-medical-51.jpg')] -mx-7 p-7 desktopSmall:-mx-[200px] desktopSmall:px-[200px]">
      <div className="grid gap-10 min-[800px]:grid-cols-3">
        <h2 className="min-[800px]:hidden">Dr. Kyle Rorke</h2>
        <div className="grid gap-4 order-2 min-[800px]:order-none place-content-start min-[800px]:col-span-2">
          <h2 className="hidden mb-6 min-[800px]:block text-left">
            Dr. Kyle Rorke
          </h2>
          {paragraphs.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <Button
            link="mailto:info@monksmedical.com"
            backgroundColor="light brown"
            cssClasses="mt-6 desktopSmall:mr-auto"
            ariaLabel="Book a cosultation via email"
          >
            Book a consultation
          </Button>
        </div>
        <Image
          src={kylesImage}
          alt="Dr Kyle Rorke"
          className="aspect-[3/4] phone:max-h-[450px] min-[800px]:max-h-fit min-[500px]:object-top desktopSmall:aspect-square"
          width={800}
          height={450}
        />
      </div>
      <div className="grid gap-10 tablet:grid-cols-2 min-[800px]:grid-cols-3">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Dr Kyle Rorke - ${index}`}
              className={classNames("aspect-video", {
                "w-full h-auto tablet:col-span-2 tablet:aspect-[16/7] min-[800px]:col-auto min-[800px]:aspect-video":
                  index === 2,
              })}
              width={800}
              height={600}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutComponent;
