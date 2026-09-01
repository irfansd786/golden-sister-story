import { cn } from "../../utils/helpers";

interface SectionBadgeProps {
  children: string;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return <div className={cn("section-kicker mb-3", className)}>{children}</div>;
}
