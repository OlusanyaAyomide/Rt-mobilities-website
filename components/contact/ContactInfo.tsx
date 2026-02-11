"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import CardWrapper from "@/components/landing/CardWrapper";

const contactDetails = [
  {
    title: "Head Office Address",
    value: "Mulliner Towers, 39 Alfred Rewane Rd, Ikoyi, Lagos, Nigeria",
    icon: MapPin,
    action: "View on Map",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "WhatsApp Support",
    value: "+234 707 692 4432",
    icon: MessageCircle,
    action: "Chat with us",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Email Address",
    value: "info@rtmobility.ng",
    icon: Mail,
    action: "Send an email",
    color: "bg-sky-50 text-sky-600",
  },
];

export default function ContactInfo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 h-full">
      {contactDetails.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={cn(
              "transition-all duration-1000 ease-out transform h-full",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <CardWrapper className="p-8 border-transparent bg-white shadow-sm flex flex-col items-start gap-4 group h-full justify-between">
              <div className="space-y-4 w-full">
                <div className={cn("inline-flex p-3 rounded-xl shrink-0 transition-transform group-hover:scale-110", item.color)}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-primary-deep text-lg leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
              <button className="text-primary text-sm font-semibold flex items-center gap-1 group/btn hover:underline mt-2">
                {item.action}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </CardWrapper>
          </div>
        );
      })}
    </div>
  );
}
