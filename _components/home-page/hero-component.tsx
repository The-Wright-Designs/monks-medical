import Slider from "../slider";

const HeroComponent = () => {
  return (
    <section className="max-w-[1480px] overflow-hidden min-[1480px]:mx-auto">
      <div className="-mx-7 h-[450px] tablet:h-[550px] desktop:hidden">
        <Slider cssClasses="w-full h-full" />
      </div>
      <div className="hidden h-[600px] desktop:block">
        <Slider desktop cssClasses="w-full h-full" />
      </div>
      <div className="bg-brown px-7 py-20 desktop:px-[100px] desktop:py-10 desktop:mx-auto">
        <h1 className="text-[2rem] normal-case font-light text-center text-white leading-[2.4rem]">
          <span className="font-medium text-white">Monk’s Medical</span> is a
          holistic healthcare practice based in Plettenberg Bay.
        </h1>
      </div>
    </section>
  );
};

export default HeroComponent;
