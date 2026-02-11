"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const stats = [
  { label: "VEHICLES FUNDED", value: 100, suffix: "+" },
  { label: "ACTIVE INVESTORS", value: 300, suffix: "+" },
  { label: "PAYOUT RATE", value: 95, suffix: "%" },
];

export default function AboutStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: typeof stats[0];
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <div
      className={cn(
        "bg-blue-100/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-700 ease-out transform",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <p className="text-sm font-bold text-primary tracking-wider uppercase mb-4">
        {stat.label}
      </p>
      <p className="text-5xl md:text-6xl font-bold text-primary-deep mb-2">
        {count}
        {stat.suffix}
      </p>
    </div>
  );
}
