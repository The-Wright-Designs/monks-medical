import HeroComponent from "../_components/home-page/hero-component";
import AboutComponent from "../_components/home-page/about-component";
import ServicesComponent from "../_components/home-page/services/services-component";
import ContactComponent from "../_components/home-page/contact-component";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <div className="max-w-[1100px] mx-7 min-[1156px]:mx-auto">
        <AboutComponent />
        <div id="services" className="scroll-mt-20" />
        <ServicesComponent />
        <ContactComponent />
      </div>
    </>
  );
}
