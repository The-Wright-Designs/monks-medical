import classNames from "classnames";
import Image from "next/image";

interface Item {
  title: string;
  image: string;
  paragraph: string;
}

interface Props {
  data: Item[];
  cssClasses?: string;
}

const DripItems = ({ data, cssClasses }: Props) => {
  return (
    <main className={cssClasses}>
      {data.map(({ title, image, paragraph }, index) => (
        <div key={index}>
          <section
            key={index}
            className={classNames("grid gap-10 min-[800px]:grid-cols-2", {
              "desktopSmall:grid-cols-[1fr_400px]": index % 2 === 0,
              "desktopSmall:grid-cols-[400px_1fr]": index % 2 === 1,
            })}
          >
            <div
              className={classNames("grid gap-7", {
                "desktopSmall:order-2": index % 2 === 1,
              })}
            >
              <h3 className="text-left">{title}</h3>
              <div>
                <p className="underline text-left mb-4">Ingredients:</p>
                <p className="text-justify">{paragraph}</p>
              </div>
            </div>
            <Image
              src={image}
              alt="Dr Kylee Rorke - Drips"
              className={classNames(
                "aspect-video min-[800px]:aspect-none min-[800px]:h-full",
                {
                  "scale-x-[-1]": index === 1,
                }
              )}
              width={800}
              height={450}
            />
          </section>
          {index !== data.length - 1 && (
            <hr className={`text-black/25 my-15`} />
          )}
        </div>
      ))}
    </main>
  );
};

export default DripItems;
