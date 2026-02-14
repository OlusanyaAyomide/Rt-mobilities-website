"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Building2, Radio, Handshake } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Real Assets",
    description: "Unlike digital currencies, your investment is backed by tangible, physical vehicles and logistics infrastructure."
  },
  {
    icon: Radio,
    title: "Tech-enabled Tracking",
    description: "Monitor your assets in real-time. Every vehicle is equipped with high-precision IoT for performance and location tracking."
  },
  {
    icon: Handshake,
    title: "Professional Management",
    description: "Completely hands-off for you. We handle maintenance, driver vetting, insurance, and compliance."
  }
];

export default function RtConnectFeatures() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center transition-all duration-700 ease-out",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary-deep mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
