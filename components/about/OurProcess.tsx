"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ShieldCheck, Car, TrendingUp } from "lucide-react";
import CardWrapper from "@/components/landing/CardWrapper";

const processSteps = [
  {
    title: "Identify Opportunities",
    description: "We identify viable transportation opportunities with strong demand and operational feasibility.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Deploy Assets",
    description: "Assets are deployed through structured partnerships ensuring professional management and accountability.",
    icon: Car,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Manage & Distribute",
    description: "We manage operations centrally and distribute earnings transparently via technology.",
    icon: TrendingUp,
    color: "bg-blue-600 text-white",
  },
];

export default function OurProcess() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header with Animated Underline */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-deep mb-4 inline-block relative">
            How We Operate
            {/* Animated Underline */}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                inView ? "w-full opacity-100" : "w-0 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            />
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            To enable individuals and businesses to participate in transportation assets through technology, transparency, and professional operations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} isInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  isInView,
}: {
  step: typeof processSteps[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = step.icon;

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out transform",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardWrapper
        className="h-full p-8 border-transparent bg-white shadow-sm"
        showCircle={true}
        circlePosition="top-right"
      >
        <div className={cn("inline-flex p-4 rounded-2xl mb-6", step.color)}>
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-bold text-primary-deep mb-4 group-hover/card:text-primary-deep transition-colors duration-300">
          {step.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
      </CardWrapper>
    </div>
  );
}
