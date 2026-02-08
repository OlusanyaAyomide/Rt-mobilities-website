"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Car, Building2, Activity } from "lucide-react";

interface ContentSectionProps {
  activeIndex: number;
  onHover: (index: number) => void;
}

const contentData = [
  {
    title: "1. Transportation",
    description: "Participate in revenue-generating mobility fleets managed by professionals. We handle the logistics while you earn from daily operations.",
    icon: Car,
  },
  {
    title: "2. Asset Management",
    description: "Our structured model tracks asset deployment, ensures professional maintenance, and monitors all operations centrally for maximum efficiency.",
    icon: Building2,
  },
  {
    title: "3. Operations",
    description: "Earn from daily operations powered by technology. We provide full transparency into performance, usage, and revenue generation in real-time.",
    icon: Activity,
  },
];

export default function ContentSection({ activeIndex, onHover }: ContentSectionProps) {
  return (
    <div className="flex flex-col justify-center gap-8 p-4 md:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            How We Work
          </span>
        </div>
        <p className="text-muted-foreground max-w-lg">
          A seamless ecosystem designed for transparency and performance.
        </p>
      </div>

      <div className="grid gap-3">
        {contentData.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = item.icon;

          return (
            <Card
              key={index}
              isActive={isActive}
              className="py-4 cursor-pointer border-transparent"
              onMouseEnter={() => onHover(index)}
            >
              <CardHeader className="flex flex-row items-center gap-4 ">
                <div className={cn(
                  "p-2 rounded-lg transition-colors duration-300",
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
