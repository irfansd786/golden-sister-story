interface TimelineImageProps {
  url?: string | undefined;
  alt?: string;
}

export function TimelineImage({ url, alt = "Memory milestone" }: TimelineImageProps) {
  return (
    <div className="group relative mx-auto mb-5 flex aspect-square w-28 items-center justify-center overflow-hidden rounded-full border-2 border-pink-bright/90 bg-purple-surface p-1 shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-transform duration-300 hover:scale-110">
      {url ? (
        <img src={url} alt={alt} className="h-full w-full rounded-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-placeholder text-[.6rem] font-bold text-cream/70">
          PHOTO
        </div>
      )}
    </div>
  );
}
