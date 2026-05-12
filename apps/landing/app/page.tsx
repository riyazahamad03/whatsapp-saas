import { BulkModule } from "../components/landing/BulkModule";
import { FinalCta } from "../components/landing/FinalCta";
import { Footer } from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";
import { Logos } from "../components/landing/Logos";
import { Nav } from "../components/landing/Nav";
import { PortalModule } from "../components/landing/PortalModule";
import { ReminderModule } from "../components/landing/ReminderModule";
import { RoiModule } from "../components/landing/RoiModule";
import { ServiceModule } from "../components/landing/ServiceModule";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Logos />
      <BulkModule />
      <ServiceModule />
      <ReminderModule />
      <PortalModule />
      <RoiModule />
      <FinalCta />
      <Footer />
    </>
  );
}
