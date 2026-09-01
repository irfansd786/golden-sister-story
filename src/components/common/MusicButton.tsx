import { Music2 } from "lucide-react";
import { useMusic } from "../../hooks/useMusic";

export function MusicButton() {
  const { playing, togglePlay } = useMusic();

  return (
    <button
      type="button"
      aria-label={playing ? "Music Playing" : "Play Music"}
      onClick={togglePlay}
      className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-cream/20 bg-night/75 px-3 py-2 text-xs text-cream backdrop-blur-md transition hover:border-pink-bright/70"
    >
      <Music2 size={15} className={playing ? "animate-pulse text-gold" : "text-cream/75"} />
      <span className="hidden sm:inline">{playing ? "Music Playing" : "Play Music"}</span>
    </button>
  );
}
