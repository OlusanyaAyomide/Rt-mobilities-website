"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Car, Building2, Activity, Briefcase } from "lucide-react";

interface ContentSectionProps {
  activeIndex: number;
  onHover: (index: number) => void;
}

const contentData = [
  {
    title: "1. Ride Services",
    description: "Safe, reliable, and affordable transport for daily commuting and intra‑city movement.",
    icon: Car,
  },
  {
    title: "2. Vehicle Rentals",
    description: "Daily and long‑term rental options for tricycles, motorcycles, and cars ideal for personal or commercial use.",
    icon: Building2,
  },
  {
    title: "3. Purchase & Ownership Schemes",
    description: "Flexible vehicle acquisition programs that enable drivers and partners to own mobility assets over time.",
    icon: Activity,
  },
  {
    title: "4. Managed Services",
    description: "Own the asset, outsource the headache: Let RT Mobility handle the engineering, driver vetting, and daily remittances while you enjoy a truly passive, tech-managed income from your existing fleet.",
    icon: Briefcase,
  },
];

export default function ContentSection({ activeIndex, onHover }: ContentSectionProps) {
  return (
    <div className="flex flex-col justify-center gap-6 p-4 md:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Mobility Services
          </span>
        </div>
        <h2 className="text-3xl font-bold text-primary-deep">
          Everyday Mobility, <br />
          <span className="text-primary">Built for Real Needs</span>
        </h2>
        <p className="text-muted-foreground max-w-lg">
          RT Mobility delivers practical transportation solutions designed for individuals, businesses, and communities.
        </p>
      </div>

      <div className="grid gap-2.5">
        {contentData.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = item.icon;

          return (
            <Card
              key={index}
              isActive={isActive}
              className="py-3 cursor-pointer"
              onMouseEnter={() => onHover(index)}
            >
              <CardHeader className="flex flex-row items-center gap-4 ">
                <div className={cn(
                  "p-1.5 rounded-lg transition-colors duration-300",
                  isActive ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover/card:bg-primary/10 group-hover/card:text-primary"
                )}>
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className={cn(
                  "text-lg transition-colors duration-300",
                  isActive ? "text-primary-deep" : "text-foreground"
                )}>
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="-mt-2">
                <CardDescription className={cn(
                  "transition-all duration-300 pl-[52px] text-sm",
                  isActive ? "text-foreground opacity-100" : "opacity-70 group-hover/card:opacity-100"
                )}>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
