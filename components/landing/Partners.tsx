"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div>
            <div>
              <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
                PARTNERSHIPS & PROGRAMS
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary-deep mb-6">
                Looking to Participate <br />
                <span className="text-primary">Beyond Usage?</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                For organizations, cooperatives, and partners interested in structured participation programs, please visit <span className="text-primary font-semibold">RT Connect</span> our dedicated partnership and contribution platform.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-deep text-white px-8 h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:scale-105 active:scale-95 group">
                Visit RT Connect
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
