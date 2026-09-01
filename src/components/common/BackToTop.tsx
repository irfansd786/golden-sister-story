import { ArrowDown } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";
import { scrollToSection } from "../../utils/scrollUtils";

export function BackToTop() {
  const { scrollY } = useScroll();

  if (scrollY < 500) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToSection("landing")}
      className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-night/80 text-cream backdrop-blur-md transition hover:border-gold hover:text-gold"
    >
      <ArrowDown className="rotate-180" size={18} />
    </button>
  );
}
