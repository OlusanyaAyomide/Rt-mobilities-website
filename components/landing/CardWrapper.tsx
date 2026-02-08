import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface CardWrapperProps extends React.ComponentProps<typeof Card> {
  showCircle?: boolean;
  circlePosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  children: React.ReactNode;
}

export default function CardWrapper({
  className,
  showCircle = false,
  circlePosition = "top-right",
  children,
  ...props
}: CardWrapperProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-[0_0_20px_0_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {/* Animated Bottom Line */}
      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-primary transition-all duration-300 ease-out group-hover/card:w-full" />

      {showCircle && (
        <div
          className={cn(
            "absolute w-32 h-32 rounded-full bg-primary/5 transition-all duration-500 ease-out z-0 pointer-events-none",
            "group-hover/card:scale-150 group-hover/card:opacity-100", // Expand on hover?
            // Position logic
            circlePosition === "top-right" && "-top-10 -right-10",
            circlePosition === "top-left" && "-top-10 -left-10",
            circlePosition === "bottom-right" && "-bottom-10 -right-10",
            circlePosition === "bottom-left" && "-bottom-10 -left-10"
          )}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </Card>
  );
}
