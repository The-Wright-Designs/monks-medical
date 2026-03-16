import classNames from "classnames";
import Image from "next/image";

interface ItemProps {
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
  flipImage?: boolean;
  reverse?: boolean;
  stretchImage?: boolean;
  cssClasses?: string;
}

const AdvancedItem = ({
  title,
  children,
  imageUrl,
  flipImage,
  reverse,
  stretchImage,
  cssClasses,
}: ItemProps) => {
  return (
    <article
      className={classNames("grid gap-10", {
        "tablet:grid-cols-2": imageUrl,
      })}
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-left break-words">{title}</h3>
        <div className={cssClasses}>{children}</div>
      </div>
      {imageUrl && (
        <div
          className={classNames("relative aspect-video tablet:aspect-auto", {
            "order-first": imageUrl,
            "tablet:order-last": imageUrl && reverse,
            "desktop:aspect-video": !stretchImage,
          })}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={flipImage ? "-scale-x-100" : ""}
          />
        </div>
      )}
    </article>
  );
};

export default AdvancedItem;
