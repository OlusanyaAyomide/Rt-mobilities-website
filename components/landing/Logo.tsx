import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 120, height = 20 }: LogoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/logo.png"
        alt="RT Mobility Logo"
        width={width}
        height={height}
        className="object-contain h-20"
        priority
      />
    </div>
  );
}
