import { cn } from "../../utils/helpers";

interface PolaroidCardProps {
  caption: string;
  rotationClass: string;
  url?: string | undefined;
  onClick: () => void;
}

export function PolaroidCard({ caption, rotationClass, url, onClick }: PolaroidCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("polaroid-frame group block w-full text-left", rotationClass)}
    >
      <div className="relative aspect-[1.2] w-full overflow-hidden bg-placeholder">
        {url ? (
          <img
            src={url}
            alt={caption}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-bold text-cream/60">
            PHOTO
          </div>
        )}
      </div>
      <span className="mt-2 block font-script text-xl text-night">{caption}</span>
    </button>
  );
}
