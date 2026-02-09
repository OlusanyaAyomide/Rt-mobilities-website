import Hero from "@/components/landing/Hero";
import HowWeWork from "@/components/landing/HowWeWork/HowWeWork";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Workflow from "@/components/landing/Workflow/Workflow";
import MobileAppOverview from "@/components/landing/MobileAppOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <WhyChooseUs />
      <Workflow />
      <MobileAppOverview />
    </>
  );
}