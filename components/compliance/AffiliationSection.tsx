"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Scale, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AffiliationSection() {
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
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wider uppercase">
                REGULATORY FRAMEWORK
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-deep leading-tight">
              Affiliation with Coffer
              <br />
              Cooperative Society
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              RT Mobility operates in strict adherence to Cooperative laws and
              maintains a strategic relationship with the Coffer Cooperative
              Society (LCSC 20011). This partnership ensures that all operational
              activities are vetted against high-level regulatory benchmarks.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary-deep mb-2">
                  Legal Adherence
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full compliance with the Cooperative Societies Act, ensuring
                  member-centric operations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary-deep mb-2">
                  License LCSC 20011
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Official registration and oversight by regulatory authorities
                  for financial mobility.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-semibold group"
              >
                <ShieldCheck className="mr-2 w-4 h-4 text-primary" />
                View Certification Details
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/compliance-hammer.jpg"
                alt="Regulatory Compliance - Scales of Justice"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 bg-primary text-white rounded-xl px-6 py-4 shadow-xl">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs font-semibold tracking-wider uppercase text-white/80">
                COMPLIANCE SCORE IN
                <br />
                2023 EXTERNAL AUDIT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
