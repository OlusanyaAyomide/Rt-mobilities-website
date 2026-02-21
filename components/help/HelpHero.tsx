"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

// These must match the faq items in HelpFAQ
const suggestions = [
  { label: "Is daily surplus fixed?", faqValue: "faq-0" },
  { label: "How are drivers vetted?", faqValue: "faq-1" },
  { label: "What is the minimum participation?", faqValue: "faq-2" },
  { label: "How often can I withdraw my earnings?", faqValue: "faq-3" },
  { label: "What services does RT Mobility offer?", faqValue: "faq-4" },
  { label: "Who can use RT Mobility services?", faqValue: "faq-5" },
  { label: "Does RT Mobility operate its own vehicles?", faqValue: "faq-6" },
  { label: "Is RT Mobility a financial or investment platform?", faqValue: "faq-7" },
];

const popularTags = ["Daily Surplus", "Vetting Process", "Audit Trails"];

interface HelpHeroProps {
  onSelectFaq: (faqValue: string) => void;
}

export default function HelpHero({ onSelectFaq }: HelpHeroProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? suggestions.filter((s) =>
      s.label.toLowerCase().includes(query.toLowerCase())
    )
    : suggestions;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSelect(faqValue: string) {
    setIsFocused(false);
    setQuery("");
    onSelectFaq(faqValue);

    // Scroll to FAQ section
    setTimeout(() => {
      const el = document.getElementById("help-faq-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }

  function handleTagClick(tag: string) {
    setQuery(tag);
    setIsFocused(true);
  }

  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/help-desk.jpg"
        alt="Help Desk Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-deep/50 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up">
          How can we help you?
        </h1>

        {/* Search Bar */}
        <div
          ref={containerRef}
          className="relative max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for articles, guides, or keywords..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              className="w-full h-14 pl-12 pr-4 rounded-full bg-white text-primary-deep text-base shadow-xl border-0 outline-none focus:ring-4 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
            />
          </div>

          {/* Suggestions dropdown */}
          {isFocused && filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-72 overflow-y-auto">
              <div className="px-4 py-2.5 border-b border-gray-50">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {query.trim() ? "Results" : "Popular Questions"}
                </span>
              </div>
              {filtered.map((s) => (
                <button
                  key={s.faqValue}
                  onClick={() => handleSelect(s.faqValue)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-primary-deep hover:bg-blue-50/50 transition-colors text-sm group"
                >
                  <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                  <span className="group-hover:text-primary transition-colors">
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Popular Tags - hidden when dropdown is open */}
        {!isFocused && (
          <div className="flex items-center justify-center gap-2 mt-5 animate-fade-in-up animation-delay-400">
            <span className="text-white/60 text-sm">Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="text-sm text-primary-foreground/90 hover:text-white font-medium transition-colors hover:underline underline-offset-2"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
