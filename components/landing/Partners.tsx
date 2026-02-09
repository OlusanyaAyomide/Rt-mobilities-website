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
            <h2 className="text-3xl md:text-5xl font-bold text-primary-deep mb-6">
              Become Our <span className="text-primary">Partner</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Industry-leading solutions? Check. World-class partner program? Check.
              Flexibility to build a business that works best for you? Check.
              There really is no better time to become an RT Mobility partner.
              Our business is based on helping partners run simple every day – why shouldn’t yours do the same?
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mt-4">
              The RT Connect program provides you with the tools, resources, and benefits to
              help you build, run, and grow a profitable business. Ready to join the future
              of asset-backed mobility? Check!
            </p>
          </div>

          <div className="pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary-deep text-white px-8 h-12 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:scale-105 active:scale-95 group">
              Start Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
