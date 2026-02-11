"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/aboutus.jpg"
        alt="About Us Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay - Primary Deep Color */}
      <div className="absolute inset-0 bg-primary-deep/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40" /> {/* Additional darkening for text readability */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-block px-4 py-2 bg-emerald-500 rounded-full text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
          ABOUT US
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
          Empowering Mobility.
          <br />
          <span className="text-white">Creating Ownership.</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-200">
          RT Mobility was created to bridge the gap between transportation demand and accessible investment opportunities. We believe mobility is not just a service — it is an asset class that can create sustainable value when managed properly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
            Invest Now
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
            Our Performance
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
}
