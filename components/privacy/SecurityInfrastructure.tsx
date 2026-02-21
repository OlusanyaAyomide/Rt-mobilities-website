"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ShieldCheck, Lock, ScrollText, Languages } from "lucide-react";

interface SecurityInfrastructureProps {
  onVisible: (id: string) => void;
}

const features = [
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description:
      "All sensitive data is encrypted using AES-256 standards both at rest and in transit.",
  },
  {
    icon: ScrollText,
    title: "Audit Trails",
    description:
      "Every data access event is logged in an immutable audit trail for full accountability.",
  },
];

export default function SecurityInfrastructure({ onVisible }: SecurityInfrastructureProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("security");
    },
  });

  return (
    <section
      id="security"
      ref={ref}
      className={cn(
        "scroll-mt-28 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
          <ShieldCheck className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-deep">
          4. Security Infrastructure
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">
        We implement a variety of security measures to maintain the safety of
        your personal information when you enter, submit, or access your data.
      </p>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {features.map(({ icon: Icon, title, description }, i) => (
          <div
            key={i}
            className={cn(
              "border border-border rounded-xl p-5 bg-white transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary-deep">{title}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Plain English */}
      <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-5">
        <div className="flex items-center gap-2 mb-2">
          <Languages className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
            In Plain English
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed italic">
          We use the same level of security as a bank. We lock your data with
          digital keys and keep a record of whenever anyone (authorized) looks
          at it.
        </p>
      </div>
    </section>
  );
}
