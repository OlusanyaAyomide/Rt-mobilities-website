"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Settings2,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";

const processCards = [
  {
    image: "/service1.jpg",
    icon: Settings2,
    label: "DAILY OPERATIONS",
    title: "Full Logistics Control",
    description:
      "Trip scheduling, driver coordination, and route optimisation — handled end-to-end by our operations team.",
    accent: "bg-primary/90",
  },
  {
    image: "/service2.jpg",
    icon: BadgeDollarSign,
    label: "REVENUE MANAGEMENT",
    title: "Automated Remittances",
    description:
      "Daily earnings tracked and remitted automatically. Transparent income reporting for every asset owner.",
    accent: "bg-emerald-600/90",
  },
  {
    image: "/service3.jpg",
    icon: ShieldCheck,
    label: "ASSET PROTECTION",
    title: "Maintained & Insured",
    description:
      "Regular vehicle health checks, rapid breakdown response, and insurance coordination for your peace of mind.",
    accent: "bg-violet-600/90",
  },
];

export default function ManagedServicesHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % processCards.length);
        setIsAnimating(false);
      }, 400);
    }, 10000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const goToCard = useCallback((index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
    startInterval(); // reset counter
  }, [startInterval]);

  const card = processCards[activeIndex];
  const Icon = card.icon;

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <Image
        src="/warehouse.jpg"
        alt="Managed Services Background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlays to darken for readability */}
      <div className="absolute inset-0 bg-primary-deep/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40" />
      {/* Subtle plus pattern */}
      <div className="absolute inset-0 bg-pattern-plus opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 items-center">

          {/* ─── LEFT: Content (larger) ─── */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-block px-4 py-2 bg-primary/90 rounded-full text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
              INSTITUTIONAL FLEET MANAGEMENT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
              Hands-Free Fleet <br />
              <span className="text-primary">Management</span> for <br />
              Asset Owners
            </h1>

            <p className="text-lg md:text-xl max-w-xl mb-10 text-white/80 leading-relaxed animate-fade-in-up animation-delay-200">
              You own the asset. We run the business. Experience institutional-grade
              operational excellence — from driver vetting to daily remittances,
              fully managed by RT Mobility.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full text-base font-semibold shadow-lg hover:scale-105 transition-all"
                asChild
              >
                <Link href="/contact">Speak to our Sales Team</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white px-8 h-12 rounded-full text-base font-semibold backdrop-blur-sm hover:scale-105 transition-all"
                asChild
              >
                <Link href="#how-it-works">View How It Works</Link>
              </Button>
            </div>

            {/* Mini stat indicators */}
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Daily Remittances
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Driver Vetting
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                Asset Insurance
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Live Reporting
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Animated Card Shuffle ─── */}
          <div className="relative flex flex-col items-center gap-3">
            {/* Main active card */}
            <div
              className={cn(
                "relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500",
                isAnimating ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
              )}
              style={{ minHeight: 340 }}
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Card content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                {/* Top: badge */}
                <span className={cn("self-start text-[10px] font-bold tracking-widest uppercase text-white px-3 py-1.5 rounded-full", card.accent)}>
                  {card.label}
                </span>

                {/* Bottom: text + icon */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/20 rounded-lg shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight mb-1">{card.title}</p>
                      <p className="text-white/75 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-1">
              {processCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToCard(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === activeIndex ? "bg-primary w-6" : "bg-white/30 w-2"
                  )}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>

            {/* Small preview stacked cards (decorative) */}
            <div className="grid grid-cols-2 gap-3 w-full mt-1">
              {processCards
                .filter((_, i) => i !== activeIndex)
                .slice(0, 2)
                .map((preview, i) => {
                  const PreviewIcon = preview.icon;
                  return (
                    <div
                      key={i}
                      className="relative h-24 rounded-xl overflow-hidden opacity-60 hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={() => goToCard(processCards.findIndex(c => c === preview))}
                    >
                      <Image src={preview.image} alt={preview.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 flex items-end p-3">
                        <div className="flex items-center gap-2">
                          <PreviewIcon className="w-3.5 h-3.5 text-white" />
                          <span className="text-white text-xs font-semibold line-clamp-1">{preview.title}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-xs">Scroll Down</span>
      </div>
    </section>
  );
}
