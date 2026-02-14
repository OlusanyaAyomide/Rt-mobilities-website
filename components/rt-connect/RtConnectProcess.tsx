"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { UserPlus, Search, Wallet, Calculator, LineChart, Truck } from "lucide-react";

export default function RtConnectProcess() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: UserPlus,
      title: "Sign up",
      description: "Create your secure account"
    },
    {
      icon: Search,
      title: "Choose opportunity",
      description: "Select from vetted fleets"
    },
    {
      icon: Wallet,
      title: "Fund",
      description: "Commit your capital"
    },
    {
      icon: Truck,
      title: "Assets deployed",
      description: "Vehicles hit the road"
    },
    {
      icon: Calculator,
      title: "Earn",
      description: "Receive regular payouts"
    },
    {
      icon: LineChart,
      title: "Track",
      description: "Monitor via real-time IoT"
    }
  ];

  return (
    <section className="relative py-20 bg-blue-50/30 overflow-hidden text-center">
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />
      <div className="container relative z-10 mx-auto px-4">

        <div ref={ref} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Your journey from investor to asset owner in six simple steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            // Delays for staggered animation
            const delay = 200 + (index * 150);

            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center group transition-all duration-700 transform",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-blue-50 transition-colors duration-300 relative z-10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-primary-deep mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground max-w-[120px] mx-auto text-center">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
