interface HangingPhotoProps {
  url?: string | undefined;
  alt?: string;
}

export function HangingPhoto({ url, alt = "Hanging memory" }: HangingPhotoProps) {
  return (
    <>
      {/* Wooden Peg / Clothespin clip matching Reference #10 */}
      <div className="absolute -top-4 left-1/2 z-20 h-6 w-2.5 -translate-x-1/2 rounded-sm bg-amber-700/90 shadow-md border border-amber-900/40">
        <div className="mx-auto mt-1 h-1 w-1.5 rounded-full bg-gold/80" />
      </div>

      <div className="polaroid-frame group relative overflow-hidden">
        <div className="aspect-[1.1] w-full overflow-hidden bg-placeholder">
          {url ? (
            <img
              src={url}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-bold text-cream/60">
              PHOTO
            </div>
          )}
        </div>
      </div>
    </>
  );
}
