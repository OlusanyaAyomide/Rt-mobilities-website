"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { BarChart2, Languages } from "lucide-react";

interface DataCollectionProps {
  onVisible: (id: string) => void;
}

const dataPoints = [
  {
    title: "Know Your Customer (KYC):",
    description:
      "We collect government-issued identification, proof of address, and professional credentials to ensure compliance with regional transportation regulations.",
  },
  {
    title: "Asset Tracking:",
    description:
      "To ensure fleet efficiency and user safety, we collect real-time geolocation data from all mobility assets while they are in operation.",
  },
  {
    title: "Transactional Data:",
    description:
      "History of usage, payments, and service requests processed through our secure infrastructure.",
  },
];

export default function DataCollection({ onVisible }: DataCollectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    onChange: (visible) => {
      if (visible) onVisible("data-collection");
    },
  });

  return (
    <section
      id="data-collection"
      ref={ref}
      className={cn(
        "scroll-mt-28 transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Heading with icon badge */}
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10">
          <BarChart2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-deep">
          2. Data Collection &amp; Use
        </h2>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">
        We collect information necessary to provide our mobility services,
        focusing on two primary categories: institutional compliance and
        operational efficiency.
      </p>

      {/* Data point cards */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-6 space-y-4">
        {dataPoints.map(({ title, description }) => (
          <div key={title} className="flex gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-semibold text-primary-deep">{title}</span>{" "}
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
          We need to know who you are (KYC) to follow the law, and we need to
          know where our vehicles are (Tracking) to keep things running safely
          and smoothly for everyone.
        </p>
      </div>
    </section>
  );
}
