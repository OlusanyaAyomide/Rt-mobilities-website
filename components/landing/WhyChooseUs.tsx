"use client";

import { ShieldCheck, Settings, LineChart, Lock, Users, Briefcase, Key, Smartphone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import CardWrapper from "@/components/landing/CardWrapper";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Sustainable Income",
    description: "Creating sustainable income opportunities for drivers and partners.",
    icon: Users,
  },
  {
    title: "Business Support",
    description: "Supporting small transport businesses to grow and manage fleets efficiently.",
    icon: Briefcase,
  },
  {
    title: "Access to Assets",
    description: "Enabling access to modern mobility assets for improved service delivery.",
    icon: Key,
  },
  {
    title: "Transparency",
    description: "Promoting accountability and trust through technology-driven operations.",
    icon: Smartphone, // or Lock/LineChart
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern - Plus CSS */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            EMPOWERMENT & COMMUNITY IMPACT
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6 inline-block relative">
            Mobility That <span className="text-primary">Creates Opportunity</span>
            {/* Animated Underline */}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                inView ? "w-full opacity-100" : "w-0 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            />
          </h3>
          <p className="text-muted-foreground text-lg mb-2">
            Rt-mobility is designed to go beyond transportation.
          </p>
          <p className="text-muted-foreground text-lg">
            We empower drivers, operators, and partners by:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary-deep text-white px-8 h-12 rounded-full shadow-lg hover:scale-105 transition-all group">
            Become a Mobility Partner
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-20px 0px",
  });

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardWrapper
        className="h-full p-8 border-transparent bg-white shadow-sm"
        showCircle={true}
        circlePosition="top-right"
      >
        <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/5 text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>

        <h4 className="text-lg font-bold text-foreground mb-3 group-hover/card:text-primary-deep transition-colors duration-300">
          {feature.title}
        </h4>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </CardWrapper>
    </div>
  );
}
