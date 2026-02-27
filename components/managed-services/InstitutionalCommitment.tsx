"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ShieldCheck, Car, FileCheck2, Brush } from "lucide-react";

const requirements = [
  {
    icon: Car,
    title: "Road-worthiness",
    description: "Asset must meet national safety and functional standards.",
  },
  {
    icon: FileCheck2,
    title: "Full Inspection",
    description: "Pass our rigorous 40-point independent technician audit.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership Proof",
    description: "Valid registration and encumbrance-free documentation.",
  },
  {
    icon: Brush,
    title: "Fleet Branding",
    description: "Asset must be prepared for standard RT Managed aesthetics.",
  },
];

export default function InstitutionalCommitment() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 bg-blue-50/30 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />
      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "bg-primary-deep rounded-3xl overflow-hidden transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr]">

            {/* Left: heading */}
            <div className="p-10 lg:p-14 flex flex-col justify-between gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Institutional <br />Commitment
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  We maintain high standards to ensure the success of our managed ecosystem. All partnerships follow a strict vetting process.
                </p>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-xl p-5 w-fit">
                <FileCheck2 className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">24-Month Minimum</p>
                  <p className="text-white/50 text-xs">Management Commitment Period</p>
                </div>
              </div>
            </div>

            {/* Right: requirements grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border-t lg:border-t-0 lg:border-l border-white/10">
              {requirements.map((req, i) => {
                const Icon = req.icon;
                return (
                  <div
                    key={req.title}
                    className={cn(
                      "p-8 bg-primary-deep/80 hover:bg-white/5 transition-colors duration-200",
                      // add bottom border except last row
                      i < 2 ? "border-b border-white/10" : ""
                    )}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{req.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{req.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
