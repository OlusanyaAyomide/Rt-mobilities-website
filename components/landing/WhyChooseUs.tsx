"use client";

import { ShieldCheck, Settings, LineChart, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import CardWrapper from "@/components/landing/CardWrapper";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Asset-Backed Model",
    description: "Your participation is tied to real, physical transportation assets that generate daily value.",
    icon: ShieldCheck,
  },
  {
    title: "Managed Operations",
    description: "Professional teams handle all logistics, maintenance, and drivers, ensuring maximum efficiency.",
    icon: Settings,
  },
  {
    title: "Transparent Performance",
    description: "Track asset performance, revenue, and utilization in real-time through our app.",
    icon: LineChart,
  },
  {
    title: "Secure Technology",
    description: "Built on robust infrastructure to ensure data integrity and secure earnings distribution.",
    icon: Lock,
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
            The Fundamentals
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6 inline-block relative">
            Why  <span className="text-primary">RT Mobility ?</span>
            {/* Animated Underline */}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                inView ? "w-full opacity-100" : "w-0 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            />
          </h3>
          <p className="text-muted-foreground text-lg">
            In a volatile economic landscape, mobility remains a critical utility with consistent cash-flow characteristics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
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
