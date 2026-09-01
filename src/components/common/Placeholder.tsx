import { cn } from "../../utils/helpers";

interface ImageDisplayProps {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
}

export function Placeholder({
  src,
  alt = "Birthday memory",
  label = "PHOTO",
  className = "",
}: ImageDisplayProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-placeholder", className)}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback if network or file is unavailable
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("placeholder-box", className)} aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
