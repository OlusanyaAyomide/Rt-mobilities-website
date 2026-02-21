"use client";

import { Calendar } from "lucide-react";

export default function TermsHero() {
  return (
    <section className="pt-32 pb-10 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">
                Terms &amp; Conditions
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                Please read these terms carefully before using RT Mobility&apos;s
                services. By accessing or using our platform, you agree to be
                bound by the conditions outlined below.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase whitespace-nowrap">
              <Calendar className="w-4 h-4 text-primary" />
              Updated: Jan 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
