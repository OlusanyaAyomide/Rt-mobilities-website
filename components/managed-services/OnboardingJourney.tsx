"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    title: "Initial Interest",
    description: "Submit your fleet profile and asset details for preliminary review.",
    active: true,
  },
  {
    number: 2,
    title: "Asset Vetting",
    description: "Physical inspection and document verification by our field team.",
    active: false,
  },
  {
    number: 3,
    title: "Contract Execution",
    description: "Legal onboarding and commitment agreement signing.",
    active: false,
  },
  {
    number: 4,
    title: "Branding & Tech Install",
    description: "Fitting your asset with tracking telemetry and RT branding.",
    active: false,
  },
  {
    number: 5,
    title: "Driver Allocation",
    description: "Assigning a vetted professional from our managed pool.",
    active: false,
  },
  {
    number: 6,
    title: "Operations Commencement",
    description: "Full operational status achieved. Revenue generation begins.",
    active: false,
  },
];

export default function OnboardingJourney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 bg-blue-50/30 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-xl mx-auto mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-3 inline-block relative">
            Onboarding Journey
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                inView ? "w-full opacity-100" : "w-0 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            />
          </h2>
          <p className="text-muted-foreground text-sm mt-5">
            From application to operational revenue in 6 precise steps.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-xl mx-auto flex flex-col gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "flex items-start gap-5 transition-all duration-700",
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Left: circle + line */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 z-10",
                    step.active
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : index === steps.length - 1
                        ? "bg-primary/20 text-primary border-2 border-primary/30"
                        : "bg-white text-muted-foreground border-2 border-border shadow-sm"
                  )}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-px flex-1 my-1 transition-all duration-700",
                      inView ? "bg-border h-10" : "bg-transparent h-0"
                    )}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8">
                <p className="font-semibold text-primary-deep text-sm mb-1">{step.title}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
