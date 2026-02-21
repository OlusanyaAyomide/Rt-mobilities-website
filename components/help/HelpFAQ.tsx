"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Values must match the faqValue in HelpHero suggestions
export const helpFaqs = [
  {
    value: "faq-0",
    question: "Is daily surplus fixed?",
    answer:
      "No. Daily surplus depends on the operational performance of the assets you are participating in. Revenue is generated from actual usage and after operating costs are deducted, the surplus is distributed according to your participation structure.",
  },
  {
    value: "faq-1",
    question: "How are drivers vetted?",
    answer:
      "All drivers undergo a thorough verification process that includes identity verification, driving license validation, background checks, and a practical driving assessment. Only drivers who meet our safety and professionalism standards are onboarded.",
  },
  {
    value: "faq-2",
    question: "What is the minimum participation?",
    answer:
      "The minimum participation amount varies depending on the RT Connect model you choose. RT Connect Standard offers entry-level participation, while RT Connect Plus has higher participation limits with broader asset exposure. Visit the app for current details.",
  },
  {
    value: "faq-3",
    question: "How often can I withdraw my earnings?",
    answer:
      "Earnings from your participation can be withdrawn based on the schedule outlined in your participation agreement. Most models allow for periodic withdrawals directly to your wallet within the RT Mobility app.",
  },
  {
    value: "faq-4",
    question: "What services does RT Mobility offer?",
    answer:
      "RT Mobility provides ride and transport services, daily and long-term vehicle rentals (tricycles, motorcycles, cars, and buses), vehicle purchase and ownership programs for drivers and operators, and fleet and mobility partnerships for organizations.",
  },
  {
    value: "faq-5",
    question: "Who can use RT Mobility services?",
    answer:
      "Our services are designed for daily commuters, drivers and operators seeking vehicle access, small transport business owners, corporate and institutional partners, and community and cooperative transport groups.",
  },
  {
    value: "faq-6",
    question: "Does RT Mobility operate its own vehicles?",
    answer:
      "Yes. RT Mobility operates and manages mobility assets either directly or through structured partnerships with drivers and fleet operators. All assets are monitored and supported through our operational systems.",
  },
  {
    value: "faq-7",
    question: "Is RT Mobility a financial or investment platform?",
    answer:
      "No. RT Mobility is a transportation and mobility services company. Any structured participation or contribution programs are managed separately under dedicated platforms and are subject to their own terms and conditions.",
  },
];

interface HelpFAQProps {
  openValue: string;
  onValueChange: (value: string) => void;
}

export default function HelpFAQ({ openValue, onValueChange }: HelpFAQProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30px 0px",
  });

  return (
    <section
      id="help-faq-section"
      className="relative py-24 bg-blue-50/30 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.6] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-3">
              Popular Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find quick answers to common inquiries from our community.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion
              type="single"
              collapsible
              value={openValue}
              onValueChange={onValueChange}
              className="w-full space-y-4"
            >
              {helpFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className={cn(
                    "border border-primary/10 rounded-2xl px-6 bg-white data-[state=open]:border-primary/30 data-[state=open]:bg-blue-50/30 transition-all duration-500 ease-out transform",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
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
