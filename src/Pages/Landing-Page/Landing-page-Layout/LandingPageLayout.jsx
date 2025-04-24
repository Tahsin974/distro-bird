import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import GetHeardSection from "../Get-Heard-Section/GetHeardSection";
import HeroSection from "../Hero-Section/HeroSection";
import StoreSection from "../Store-Section/StoreSection";

const LandingPageLayout = () => {
  return (
    <div>
      <HeroSection />
      <StoreSection />
      <GetHeardSection />
    </div>
  );
};

export default LandingPageLayout;
