"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import WorkflowCard from "./WorkflowCard";

const steps = [
  {
    title: "1. Choose Your Mobility Path",
    description: "Ride with us, rent a vehicle, or apply for a purchase program.",
    gif: "/pay.gif",
  },
  {
    title: "2. Get Onboarded Digitally",
    description: "Fast verification, clear terms, and seamless onboarding.",
    gif: "/order.gif",
  },
  {
    title: "3. Operate with Support",
    description: "Access operational tools, maintenance coordination, and performance insights.",
    gif: "/operation.gif",
  },
  {
    title: "4. Grow With the Platform",
    description: "Scale usage, income, or fleet size with long‑term support.",
    gif: "/payout.gif",
  },
];

export default function Workflow() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-primary/5 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            Simple. Structured. Scalable.
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6 inline-block relative">
            HOW RT Mobility WORKS
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
            A seamless process designed for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <WorkflowCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
