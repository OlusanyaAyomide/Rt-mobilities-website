"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does RT Mobility offer?",
    answer: (
      <>
        RT Mobility provides:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Ride and transport services for individuals and businesses</li>
          <li>Daily and long-term vehicle rentals (tricycles, motorcycles, cars, and buses)</li>
          <li>Vehicle purchase and ownership programs for drivers and operators</li>
          <li>Fleet and mobility partnerships for organizations and cooperatives</li>
        </ul>
      </>
    )
  },
  {
    question: "Who can use RT Mobility services?",
    answer: (
      <>
        Our services are designed for:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Daily commuters and transport users</li>
          <li>Drivers and operators seeking vehicle access</li>
          <li>Small transport business owners</li>
          <li>Corporate and institutional partners</li>
          <li>Community and cooperative transport groups</li>
        </ul>
      </>
    )
  },
  {
    question: "Does RT Mobility operate its own vehicles?",
    answer: "Yes. RT Mobility operates and manages mobility assets either directly or through structured partnerships with drivers and fleet operators. All assets are monitored and supported through our operational systems."
  },
  {
    question: "How does RT Mobility support drivers and operators?",
    answer: (
      <>
        We support drivers and operators by:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Providing access to vehicles through rental or ownership programs</li>
          <li>Offering structured onboarding and verification</li>
          <li>Coordinating maintenance and operational support</li>
          <li>Using technology to improve transparency and accountability</li>
        </ul>
      </>
    )
  },
  {
    question: "Is RT Mobility a financial or investment platform?",
    answer: "No. RT Mobility is a transportation and mobility services company. Any structured participation or contribution programs are managed separately under dedicated platforms and are subject to their own terms and conditions."
  }
];

export default function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden border-t border-white/50">
      {/* Background Pattern - Continued from Partners */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      {/* Decorative Element */}


      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-muted-foreground text-lg">
              Common queries about our services and operations.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-sm border border-primary/5">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-primary/10 rounded-2xl px-6 bg-white data-[state=open]:border-primary/30 data-[state=open]:bg-blue-50/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-primary-deep font-semibold hover:no-underline py-5 text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
