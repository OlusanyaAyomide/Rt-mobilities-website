"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import CardWrapper from "@/components/landing/CardWrapper";
import {
  Rocket,
  BarChart3,
  Wallet,
  Wrench,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const topics = [
  {
    icon: Rocket,
    title: "Getting Started",
    description:
      "New to RT Mobility? Learn how to set up your account and begin your journey.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: BarChart3,
    title: "Participation Units",
    description:
      "Understanding the structure, minimum requirements, and unit valuation models.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Wallet,
    title: "Daily Surplus & Wallet",
    description:
      "Tracking your daily earnings, withdrawal schedules, and wallet management.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Wrench,
    title: "Asset Operations",
    description:
      "Detailed insights into maintenance, fleet health, and operational uptime.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Review our regulatory framework, insurance details, and data security protocols.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Troubleshooting portal issues, API integrations, and system requirements.",
    color: "bg-rose-50 text-rose-600",
  },
];

export default function HelpTopics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px",
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <CardWrapper
                key={index}
                showCircle
                circlePosition={index % 2 === 0 ? "top-left" : "top-right"}
                className={cn(
                  "p-7 cursor-pointer transition-all duration-700 ease-out transform",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
                    topic.color
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary-deep mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
