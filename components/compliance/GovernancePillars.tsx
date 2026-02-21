"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ShieldCheck, BookOpenText, GitPullRequestArrow, Activity } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Asset Verification",
    description:
      "Mandatory physical inspection of every vehicle unit before onboarding, ensuring collateral integrity and quality standards.",
  },
  {
    icon: BookOpenText,
    title: "Audit Trails",
    description:
      "Real-time digital transparency for every unit. Every transaction and movement is logged on an immutable ledger.",
  },
  {
    icon: GitPullRequestArrow,
    title: "Conflict of Interest",
    description:
      "Strict separation between fund management and field operations. External auditors oversee all disbursement processes.",
  },
  {
    icon: Activity,
    title: "Risk Management",
    description:
      "Comprehensive insurance coverage paired with 24/7 dual GPS tracking and predictive maintenance alerts.",
  },
];

export default function GovernancePillars() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px",
  });

  return (
    <section className="relative py-24 bg-primary-deep overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-pattern-plus" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-out transform",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Governance Pillars
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our operational model is built on four core principles that ensure
            safety, transparency, and accountability for all institutional
            stakeholders.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={cn(
                  "bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-7 transition-all duration-700 ease-out transform hover:bg-white/10 hover:border-white/20 hover:-translate-y-1",
                  cardsInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
