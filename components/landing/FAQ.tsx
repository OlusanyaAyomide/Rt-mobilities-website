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
    question: "What happens in the event of a vehicle accident?",
    answer: "All our assets are covered by comprehensive insurance through partners like AXA Mansard. In the event of an accident, RT Mobility handles the claims process and provides a replacement asset where possible to ensure your payouts remain uninterrupted."
  },
  {
    question: "Can I liquidate my investment before the 18-month period?",
    answer: "Yes, early liquidation is possible subject to a holding period and applicable terms. We provide a secondary market option where you can sell your stake to other interested participants."
  },
  {
    question: "How are drivers vetted and managed?",
    answer: "We use a rigorous vetting process including background checks, driving history verification, and mandatory training. All drivers are monitored in real-time using telematics to ensure safety and asset integrity."
  },
  {
    question: "Is my capital legally protected?",
    answer: "Yes, all asset purchases are legally backed by physical ownership documentation held in trust. We operate with full transparency and legal contracts that secure your interest in the deployment."
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
              Common queries from our RT Mobility investment partners.
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
