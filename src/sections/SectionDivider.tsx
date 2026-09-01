import { cn } from "../utils/helpers";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={cn("my-12 flex justify-center text-cream/30", className)}>
      <span className="h-1 w-12 rounded-full bg-cream/20" />
    </div>
  );
}
