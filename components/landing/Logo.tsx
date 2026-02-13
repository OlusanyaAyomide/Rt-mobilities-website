import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export default function Logo({ className, width = 120, height = 20, showText = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center relative", className)}>
      <Image
        src="/logo.png"
        alt="RT Mobility Logo"
        width={width}
        height={height}
        className="object-contain h-14 md:h-16"
        priority
      />
      {showText && (
        <span className="text-[10px] text-white relative font-bold tracking-wides mt-1 leading-none whitespace-nowrap">
          RT MOBILITY
          <span className="absolute -bottom-1 h-[2px] bg-primary w-full left-0"></span>
        </span>
      )}
    </div>
  );
}
