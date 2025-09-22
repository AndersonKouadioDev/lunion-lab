import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Pricing } from "@/components/Pricingdemo";
import { Services } from "@/components/Services";
import DesignProgress from "@/components/DesignProcess";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Secteurs from "@/components/BentoGridSecond";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        {/* <Navbar /> */}
        <Hero />
        <LogoTicker />
        <About />
        {/* <Features /> */}
        <Mission />
        <Services />
        <Secteurs />
        <DesignProgress />
        {/* <ProductShowcase /> */}
        <Pricing />
        <FAQs />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
