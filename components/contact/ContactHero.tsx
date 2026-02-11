"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/garage.jpg"
        alt="Contact Us Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay - Primary Deep Color matching About page */}
      <div className="absolute inset-0 bg-primary-deep/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
          Get in Touch
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
          Have questions about our mobility solutions? Our team is here to help you move forward with ease and efficiency in the heart of Lagos.
        </p>
      </div>
    </section>
  );
}
