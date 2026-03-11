import HeroComponent from "../_components/home-page/hero-component";
import AboutComponent from "../_components/home-page/about-component";
import ServicesComponent from "../_components/home-page/services-component";
import ContactComponent from "../_components/home-page/contact-component";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <div id="services" className=" desktop:-translate-y-20"></div>
      <ServicesComponent />
      <ContactComponent />
    </>
  );
}
