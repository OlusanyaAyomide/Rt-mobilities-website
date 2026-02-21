"use client";

import { useState } from "react";
import TermsSidebar from "./TermsSidebar";
import TermsIntroduction from "./TermsIntroduction";
import TermsEligibility from "./TermsEligibility";
import TermsThePlatform from "./TermsThePlatform";
import TermsParticipation from "./TermsParticipation";
import TermsOperationalRisks from "./TermsOperationalRisks";
import TermsCompliance from "./TermsCompliance";

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <section className="bg-blue-50/30 pt-28 pb-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex gap-10">

          {/* Sticky sidebar — hidden on mobile */}
          <div className="hidden md:block sticky top-28 self-start">
            <TermsSidebar activeSection={activeSection} />
          </div>

          {/* Right: title + sections */}
          <div id="terms-content" className="flex-1 min-w-0">
            {/* Inline page title */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-deep mb-2">
                Terms &amp; Conditions
              </h1>
              <p className="text-muted-foreground text-xs">
                Version 2.4.1
                <span className="mx-2 text-border">·</span>
                Last updated: February 27, 2026
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-10" />

            {/* Sections */}
            <div className="flex flex-col gap-14">
              <TermsIntroduction onVisible={setActiveSection} />
              <TermsEligibility onVisible={setActiveSection} />
              <TermsThePlatform onVisible={setActiveSection} />
              <TermsParticipation onVisible={setActiveSection} />
              <TermsOperationalRisks onVisible={setActiveSection} />
              <TermsCompliance onVisible={setActiveSection} />
            </div>

            {/* Footer bar */}
            <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                © 2026 RT Mobility Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-primary-deep hover:bg-muted transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all">
                  I Accept the Terms
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
