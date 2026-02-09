import Hero from "@/components/landing/Hero";
import HowWeWork from "@/components/landing/HowWeWork/HowWeWork";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Workflow from "@/components/landing/Workflow/Workflow";
import MobileAppOverview from "@/components/landing/MobileAppOverview";
import Partners from "@/components/landing/Partners";
import FAQ from "@/components/landing/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <WhyChooseUs />
      <Workflow />
      <MobileAppOverview />
      <Partners />
      <FAQ />
    </>
  );
}