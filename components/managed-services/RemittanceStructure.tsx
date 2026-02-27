"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { CalendarDays, RefreshCw, Building2 } from "lucide-react";

const tabs = ["Standard", "Custom"] as const;

const plans = [
  {
    icon: CalendarDays,
    title: "Daily Payout",
    description: "High-liquidity model with automated daily wallet transfers.",
    stat: "0%",
    statLabel: "Delay",
    highlighted: false,
    badge: null,
  },
  {
    icon: RefreshCw,
    title: "Cycle-Based",
    description: "Aggregated weekly or monthly settlements with detailed auditing.",
    stat: "48h",
    statLabel: "Settlement",
    highlighted: true,
    badge: "MOST STABLE",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Bespoke structures for fleet sizes of 10+ units.",
    stat: "Flex",
    statLabel: "Terms",
    highlighted: false,
    badge: null,
  },
];

export default function RemittanceStructure() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Standard");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-4xl mx-auto mb-12 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-2">
              Remittance Structure
            </h2>
            <p className="text-muted-foreground text-sm">
              Select the cash-flow model that fits your institutional goals.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex items-center border border-border rounded-full p-1 self-start sm:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  activeTab === tab
                    ? "bg-primary-deep text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto transition-all duration-700 delay-150",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.title}
                className={cn(
                  "relative rounded-2xl p-7 border transition-all duration-200 hover:shadow-lg",
                  plan.highlighted
                    ? "bg-primary-deep text-white border-primary-deep shadow-xl scale-[1.02]"
                    : "bg-white text-foreground border-border"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-5",
                    plan.highlighted ? "bg-white/10" : "bg-primary/10"
                  )}
                >
                  <Icon className={cn("w-5 h-5", plan.highlighted ? "text-primary" : "text-primary")} />
                </div>

                <h3 className={cn("text-lg font-bold mb-2", plan.highlighted ? "text-white" : "text-primary-deep")}>
                  {plan.title}
                </h3>
                <p className={cn("text-sm leading-relaxed mb-8", plan.highlighted ? "text-white/70" : "text-muted-foreground")}>
                  {plan.description}
                </p>

                <div className="mt-auto">
                  <span className={cn("text-3xl font-bold", plan.highlighted ? "text-white" : "text-primary-deep")}>
                    {plan.stat}
                  </span>
                  <span className={cn("text-xs ml-1.5", plan.highlighted ? "text-white/60" : "text-muted-foreground")}>
                    {plan.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
