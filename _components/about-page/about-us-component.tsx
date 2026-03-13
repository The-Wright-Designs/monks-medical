import Image from "next/image";
import classNames from "classnames";
import data from "@/_data/general-data.json";

const { paragraphs, heroImage, images } = data.aboutPage;

const AboutUsComponent = () => {
  return (
    <div className={classNames("flex flex-col gap-15")}>
      <h1>About Us</h1>

      <div className="grid tablet:grid-cols-2 gap-10 tablet:items-center desktop:grid-cols-[1fr_271px]">
        <div className="flex flex-col flex-1 gap-4">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <div className="relative aspect-square tablet:aspect-auto w-full h-full desktop:aspect-square">
          <Image src={heroImage} alt="Monks Medical" fill />
        </div>
      </div>

      <div className="hidden tablet:flex gap-10 h-[295px]">
        {images.map((src, i) => (
          <div
            key={i}
            className={classNames(
              "relative flex-1",
              i === 2 && "hidden desktop:block",
            )}
          >
            <Image src={src} alt="Monks Medical team" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsComponent;
