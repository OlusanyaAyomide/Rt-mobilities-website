"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ManagedCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "bg-primary-deep rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto transition-all duration-700",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Turn your asset into a <br />
            <span className="text-primary">smart-income unit.</span>
          </h2>
          <p className="text-white/60 text-base mb-10 max-w-lg mx-auto leading-relaxed">
            Join 400+ asset owners who have decentralised their operational risks
            with RT Managed Services.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-10 h-13 rounded-xl text-base font-semibold shadow-lg hover:scale-105 transition-all"
            asChild
          >
            <Link href="/contact">Contact Sales Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
