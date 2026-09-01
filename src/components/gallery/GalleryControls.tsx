import { Sparkles } from "lucide-react";

interface GalleryControlsProps {
  onClick: () => void;
}

export function GalleryControls({ onClick }: GalleryControlsProps) {
  return (
    <div className="mt-12 text-center">
      <button type="button" className="birthday-button" onClick={onClick}>
        Click a Photo <Sparkles size={15} />
      </button>
    </div>
  );
}
