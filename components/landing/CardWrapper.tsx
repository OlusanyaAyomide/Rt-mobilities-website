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
        "relative overflow-hidden transition-all duration-300 hover:borde hover:border-primary",
        "hover:-translate-y-2 hover:shadow-[0_0_25px_0_rgba(0,0,0,0.2)]",
        className
      )}
      {...props}
    >
      {showCircle && (
        <div
          className={cn(
            "absolute w-32 h-32 group-hover:w-40 group-hover:h-40 rounded-full bg-primary/5 transition-all duration-500 ease-out z-0 pointer-events-none",
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
