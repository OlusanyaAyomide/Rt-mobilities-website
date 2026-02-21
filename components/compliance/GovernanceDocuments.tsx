"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { FileText, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    title: "Coffer Cooperative Society Bye-laws",
    meta: "PDF · 2.4 MB · Updated Oct 2023",
  },
  {
    title: "Standard Participation Agreement",
    meta: "PDF · 1.1 MB · Version 4.2",
  },
  {
    title: "Standard Operating Procedures (Asset)",
    meta: "PDF · 4.8 MB · Updated Jan 2024",
  },
];

export default function GovernanceDocuments() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: listRef, inView: listInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px",
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 max-w-4xl mx-auto transition-all duration-700 ease-out transform",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-2">
              Governance Documents
            </h2>
            <p className="text-muted-foreground text-lg">
              Access our latest regulatory filings and participation standards.
            </p>
          </div>

          <Button
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:bg-primary/5 font-semibold shrink-0 group w-fit"
          >
            Request Custom Audit
            <Mail className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>

        {/* Document List */}
        <div ref={listRef} className="max-w-4xl mx-auto space-y-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-700 ease-out transform cursor-pointer group",
                listInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primary-deep group-hover:text-primary transition-colors">
                  {doc.title}
                </h4>
                <p className="text-sm text-muted-foreground">{doc.meta}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
