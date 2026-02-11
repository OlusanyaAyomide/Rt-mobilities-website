"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import WorkflowCard from "./WorkflowCard";

const steps = [
  {
    title: "Investment Deposit",
    description: "Begin your journey by downloading the RT Mobility app and creating your verified account. Once registered, explore our diverse range of mobility assets and select the participation model that aligns with your financial goals.",
    gif: "/pay.gif",
  },
  {
    title: "Purchase Mobility Assets",
    description: "RT Mobility utilizes the pooled funds to acquire high-demand transportation vehicles and logistics units. We strategically deploy these assets into verified commercial fleets, ensuring they act as revenue-generating machines from day one.",
    gif: "/order.gif",
  },
  {
    title: "Operations",
    description: "We handle the entire operational lifecycle through our professional management teams. From driver recruitment and maintenance to route optimization, RT Mobility ensures maximum efficiency without you lifting a finger.",
    gif: "/operation.gif",
  },
  {
    title: "Daily Payout",
    description: "Enjoy the transparency of daily earnings directly in your app wallet. As our managed fleets generate revenue from daily operations, the surplus is calculated and distributed to you. Track performance in real-time.",
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
            Our Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-deep mb-6 inline-block relative">
            Our Workflow
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
            A transparent and efficient process designed for your growth.
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
