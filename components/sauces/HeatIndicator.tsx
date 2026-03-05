import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeatIndicatorProps {
  heat: number;
  className?: string;
}

export function HeatIndicator({ heat, className }: HeatIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} title={`Heat: ${heat}/5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Flame
          key={i}
          className={cn(
            "w-3.5 h-3.5 transition-colors",
            i < heat ? "text-red-500 fill-red-500" : "text-white/15"
          )}
        />
      ))}
    </div>
  );
}
