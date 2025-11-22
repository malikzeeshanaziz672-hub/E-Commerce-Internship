import TopBar from "../components/TopBar";
import TimerSection from "../components/TimerSection";
import OutDoor from "../components/OutDoor";
import ConsumerElectronics from "../components/ConsumerElectronics ";
import RecomendedItems from "../components/RecomendedItems";
import HeroSection from "../components/HeroSection";
import SendRequest from "../components/SendRequest";
import OurExtraServices from "../components/OurExtraServices";
import SuppliersByRegion from "../components/SuppliersByRegion";
import { SiUbuntu } from "react-icons/si";
import SubscribeNews from "../components/SubscribeNews";

const Home = () => {
  return (
    <div>
      <TopBar />
      <HeroSection />
      <TimerSection />
      <OutDoor />
      <ConsumerElectronics />
      <SendRequest />
      <RecomendedItems />
      <OurExtraServices />
      <SuppliersByRegion />
      <SubscribeNews />
    </div>
  );
};

export default Home;
