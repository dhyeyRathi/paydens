import AwardsSection from "@/components/Homepage/AwardsSection";
import Doctors from "@/components/Homepage/Doctors";
import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Treatments from "@/components/Homepage/Treatments";
import LetsConnectSection from "@/components/LetsConnectSection";
import Testimonial from "@/components/Testimonial";
import MobileAppBanner from "@/components/ui/MobileAppBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-15 overflow-x-clip flex flex-col gap-8 lg:gap-16">
      <Hero />
      <Features />
      <Treatments />
      <MobileAppBanner />
      <Doctors />
      <Testimonial />
      <AwardsSection />
      <LetsConnectSection />

    </div>
  );
}
