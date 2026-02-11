"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

export default function ContactMap() {
  const [mapKey, setMapKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const lat = "6.528802394866941";
  const lng = "3.394451856613158";
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.653456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnNDMuNyJOIDPCsDIzJzQwLjAiRQ!5e0!3m2!1sen!2sng!4v1707692443200!5m2!1sen!2sng`;

  const handleResetMap = () => {
    setMapKey(prev => prev + 1);
  };

  return (
    <section
      ref={ref}
      className={cn(
        "container mx-auto px-4 py-20 transition-all duration-1000 ease-out transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group border border-border/50">
        {/* Grayscale Map Container */}
        <div className="absolute inset-0 grayscale contrast-125 brightness-110 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
          <iframe
            key={mapKey}
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Clickable Marker Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <button
            onClick={handleResetMap}
            title="Reset Map View"
            className="relative group/pin cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
          >
            {/* Pulsing ring effect - now more subtle and tied to the pin */}
            <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping scale-110 opacity-70" />

            {/* The Pin */}
            <div className="relative bg-white p-3 rounded-full shadow-2xl border border-primary/10">
              <MapPin className="w-8 h-8 text-primary animate-pulse" />
            </div>
          </button>
        </div>

        {/* Floating Location Card */}
        <div className="absolute top-10 left-10 z-10">
          <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[280px] border border-white/20">
            <h3 className="font-bold text-primary-deep text-lg mb-2">Our Location</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ikoyi, Lagos - The heart of business and mobility solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
