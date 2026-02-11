"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Handshake, Car, MapPin } from "lucide-react";
import CardWrapper from "@/components/landing/CardWrapper";

const services = [
  {
    title: "Hire Purchase",
    description: "A dual-sided model that allows investors to earn passive income while providing drivers the path to asset ownership.",
    icon: Handshake,
    color: "text-blue-600",
  },
  {
    title: "Ride Hailing",
    description: "Integration with top-tier ride-hailing platforms ensuring high utilization rates and consistent daily revenue generation.",
    icon: Car,
    color: "text-emerald-500",
  },
  {
    title: "Inter-state Trips",
    description: "Dedicated logistics and transportation for cross-country routes, optimized for safety and premium service delivery.",
    icon: MapPin,
    color: "text-blue-700",
  },
];

export default function FleetServices() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <section className="relative py-24 bg-blue-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4] bg-pattern-plus" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-deep mb-4 inline-block relative">
            Our Fleet Services
            {/* Animated Underline */}
            <span
              className={cn(
                "absolute -bottom-2 left-0 h-1 bg-linear-to-r from-primary via-blue-500 to-primary rounded-full transition-all duration-1000 ease-out",
                inView ? "w-full opacity-100" : "w-0 opacity-0"
              )}
              style={{ transitionDelay: "300ms" }}
            />
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            Comprehensive mobility solutions across Nigeria
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: typeof services[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = service.icon;

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out transform",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardWrapper
        className="h-full p-8 border-transparent bg-white shadow-sm"
        showCircle={true}
        circlePosition="top-right"
      >
        <div className={cn("mb-6", service.color)}>
          <Icon className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-bold text-primary-deep mb-4">{service.title}</h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          {service.description}
        </p>
      </CardWrapper>
    </div>
  );
}
