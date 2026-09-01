import { Sparkles as SparklesIcon } from "lucide-react";
import { cn } from "../../utils/helpers";

interface SparklesProps {
  size?: number;
  className?: string;
}

export function Sparkles({ size = 20, className = "" }: SparklesProps) {
  return <SparklesIcon size={size} className={cn("text-gold", className)} />;
}
