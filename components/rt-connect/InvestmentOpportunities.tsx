"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const opportunities = [
  {
    title: "Ride-hailing Vehicles",
    tag: "ACTIVE FLEET",
    image: "/transport.webp", // Placeholder as requested
    details: [
      { label: "Asset Type", value: "EV Sedans" },
      { label: "Use Case", value: "Urban Transport" },
      { label: "Duration", value: "12-24 Months" }
    ]
  },
  {
    title: "Logistics Fleets",
    tag: "LONG-TERM",
    image: "/transport.webp", // Placeholder
    details: [
      { label: "Asset Type", value: "Cargo Vans" },
      { label: "Use Case", value: "Last-mile Delivery" },
      { label: "Duration", value: "36 Months" }
    ]
  },
  {
    title: "Commercial Units",
    tag: "INSTITUTIONAL",
    image: "/transport.webp", // Placeholder
    details: [
      { label: "Asset Type", value: "Light Trucks" },
      { label: "Use Case", value: "Enterprise Supply" },
      { label: "Duration", value: "Variable" }
    ]
  }
];

export default function InvestmentOpportunities() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">

        <div ref={ref} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-2">
            Investment Opportunities
          </h2>
          <p className="text-muted-foreground text-sm">
            Vetted assets with stable yields and professional oversight
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ease-out border border-gray-100 group",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-primary-deep shadow-sm">
                  {opp.tag}
                </div>
                <Image
                  src={opp.image}
                  alt={opp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-deep mb-4">{opp.title}</h3>

                <div className="space-y-3 mb-6">
                  {opp.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{detail.label}</span>
                      <span className="font-semibold text-gray-900">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
