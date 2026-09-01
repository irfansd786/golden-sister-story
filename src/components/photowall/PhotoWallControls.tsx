import { Heart } from "lucide-react";

export function PhotoWallControls() {
  return (
    <div className="mt-14 text-center">
      <button type="button" className="birthday-button">
        More Memories <Heart size={15} fill="currentColor" />
      </button>
    </div>
  );
}
