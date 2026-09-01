import { RotateCcw } from "lucide-react";
import { scrollToSection } from "../../utils/scrollUtils";

export function ReplayJourney() {
  const handleReplay = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("landing");
  };

  return (
    <a href="#landing" onClick={handleReplay} className="birthday-button mt-10">
      <RotateCcw size={15} /> Replay This Journey
    </a>
  );
}
