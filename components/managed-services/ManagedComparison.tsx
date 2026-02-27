"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  CheckCircle2,
  Settings2,
  BadgeDollarSign,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const selfManaged = [
  {
    title: "Remittance Disputes",
    description: "Manual verification often leads to payment inconsistencies.",
  },
  {
    title: "Driver Absenteeism",
    description: "Unreliable staffing causes idle asset hours and lost revenue.",
  },
  {
    title: "Maintenance Oversight",
    description: "Reactive repairs instead of proactive fleet upkeep.",
  },
];

const rtManaged = [
  {
    title: "Guaranteed Remittance Logs",
    description: "Digital-first transparency with every cent accounted for.",
  },
  {
    title: "Vetted Professionals",
    description: "Access to our pool of top-tier, background-checked operators.",
  },
  {
    title: "Institutional Maintenance",
    description: "Regular 40-point inspections and preventative care.",
  },
];

const featureBar = [
  { icon: Settings2, label: "Daily Operations", sub: "Full logistics control" },
  { icon: BadgeDollarSign, label: "Revenue Management", sub: "Automated financial tracking" },
  { icon: ShieldCheck, label: "Asset Protection", sub: "Comprehensive safety protocols" },
  { icon: LineChart, label: "Operational Reporting", sub: "Detailed performance analytics" },
];

export default function ManagedComparison() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-0 bg-white overflow-hidden">
      {/* Top feature bar – primary-deep */}
      <div className="bg-primary-deep text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {featureBar.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-center gap-3 py-5 px-6">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold leading-tight">{f.label}</p>
                    <p className="text-xs text-white/50 leading-tight">{f.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="relative py-20 bg-white overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <div
            ref={ref}
            className={cn(
              "text-center max-w-2xl mx-auto mb-14 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-3 inline-block relative">
              Self-Managed vs. RT-Managed
              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                  inView ? "w-full opacity-100" : "w-0 opacity-0"
                )}
                style={{ transitionDelay: "300ms" }}
              />
            </h2>
            <p className="text-muted-foreground mt-5">
              Compare the standard ownership headache against our professional management framework.
            </p>
          </div>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Self-managed column */}
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Self-Managed</span>
              </div>
              <div className="flex flex-col gap-5">
                {selfManaged.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RT-managed column */}
            <div className="bg-primary-deep text-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-widest uppercase text-primary/80">RT-Managed</span>
              </div>
              <div className="flex flex-col gap-5">
                {rtManaged.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
