"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Info,
  User,
  Monitor,
  BarChart2,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

export const termsSections = [
  { id: "introduction", label: "Introduction", icon: Info },
  { id: "eligibility", label: "Eligibility", icon: User },
  { id: "the-platform", label: "The Platform", icon: Monitor },
  { id: "participation", label: "Participation & Surplus", icon: BarChart2 },
  { id: "operational-risks", label: "Operational Risks", icon: AlertTriangle },
  { id: "compliance", label: "Compliance", icon: ShieldCheck },
];

interface TermsSidebarProps {
  activeSection: string;
}

export default function TermsSidebar({ activeSection }: TermsSidebarProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("terms-content");
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrolled = Math.max(0, windowH - top);
      const total = height;
      setReadingProgress(Math.min(100, Math.round((scrolled / total) * 100)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="w-64 shrink-0 flex flex-col justify-between min-h-[60vh]">
      <div>
        <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase mb-4 px-3">
          Table of Contents
        </p>
        <nav className="flex flex-col gap-1">
          {termsSections.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full text-left",
                  isActive
                    ? "bg-primary/10 text-primary border-l-4 border-primary pl-2"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-4 border-transparent pl-2"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 shrink-0",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                {label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Reading progress */}
      <div className="mt-8 px-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-muted-foreground font-medium">Reading Progress</span>
          <span className="text-[10px] font-bold text-primary">{readingProgress}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
