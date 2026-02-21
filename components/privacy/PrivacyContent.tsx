"use client";

import { useState } from "react";
import PrivacySidebar from "./PrivacySidebar";
import Introduction from "./Introduction";
import DataCollection from "./DataCollection";
import DataSharing from "@/components/privacy/DataSharing";
import SecurityInfrastructure from "@/components/privacy/SecurityInfrastructure";
import RegulatoryDisclosure from "@/components/privacy/RegulatoryDisclosure";

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex gap-12">
          {/* Sticky sidebar — hidden on mobile */}
          <div className="hidden md:block sticky top-28 self-start">
            <PrivacySidebar activeSection={activeSection} />
          </div>

          {/* Main content */}
          <div id="privacy-content" className="flex-1 min-w-0 flex flex-col gap-16">
            <Introduction onVisible={setActiveSection} />
            <DataCollection onVisible={setActiveSection} />
            <DataSharing onVisible={setActiveSection} />
            <SecurityInfrastructure onVisible={setActiveSection} />
            <RegulatoryDisclosure onVisible={setActiveSection} />
          </div>
        </div>
      </div>
    </section>
  );
}
