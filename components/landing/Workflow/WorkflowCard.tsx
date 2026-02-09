"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CardWrapper from "@/components/landing/CardWrapper";

import { Button } from "@/components/ui/button";

interface WorkflowStep {
  title: string;
  description: string;
  gif: string;
}

interface WorkflowCardProps {
  step: WorkflowStep;
  index: number;
}

export default function WorkflowCard({ step, index }: WorkflowCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardWrapper
        className="h-full flex flex-col p-8 overflow-hidden group justify-between gap-8"
        showCircle={true}
        circlePosition="top-right"
      >

        {/* Header: Title */}
        <h4 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary-deep transition-colors duration-300">
          {step.title}
        </h4>

        {/* GIF Container - Prominent in header area */}
        <div className="relative w-full h-48 bg-transparent flex items-center justify-start overflow-hidden rounded-lg">
          {inView && (
            <Image
              src={step.gif}
              alt={step.title}
              fill
              className="object-contain object-left animate-in fade-in zoom-in-95 duration-1000 fill-mode-forwards"
              unoptimized
            />
          )}
        </div>

        {/* Description & Action */}
        <div className="flex flex-col gap-8 mt-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            {step.description}
          </p>

          <Button
            className="w-fit h-12 rounded-full px-6 bg-primary-deep hover:bg-primary transition-all duration-300"
            size="sm"
          >
            Learn More
          </Button>
        </div>

      </CardWrapper>
    </div>
  );
}
