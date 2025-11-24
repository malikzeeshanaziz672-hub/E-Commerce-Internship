import TopBar from "../components/TopBar";
import TimerSection from "../components/TimerSection";
import OutDoor from "../components/OutDoor";
import ConsumerElectronics from "../components/ConsumerElectronics ";
import RecomendedItems from "../components/RecomendedItems";
import HeroSection from "../components/HeroSection";
import SendRequest from "../components/SendRequest";
import OurExtraServices from "../components/OurExtraServices";
import SuppliersByRegion from "../components/SuppliersByRegion";
import SubscribeNews from "../components/SubscribeNews";
import Footer from "../components/Footer";
import AllCategories from "../components/AllCategories";

const Home = () => {
  return (
    <div>
      <TopBar />
      <AllCategories />
      <HeroSection />
      <TimerSection />
      <OutDoor />
      <ConsumerElectronics />
      <SendRequest />
      <RecomendedItems />
      <OurExtraServices />
      <SuppliersByRegion />
      <SubscribeNews />
      <Footer />
    </div>
  );
};

export default Home;
