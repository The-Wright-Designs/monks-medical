import DesktopHeader from "./desktop/desktop-header";
import MobileHeader from "./mobile/mobile-header";

const Header = () => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
};

export default Header;
