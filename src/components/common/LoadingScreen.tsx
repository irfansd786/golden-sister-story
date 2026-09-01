import { Sparkles } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-night text-cream">
      <div className="flex items-center gap-3 font-script text-3xl text-gold">
        <Sparkles className="animate-spin text-pink-bright" size={24} />
        <span>Loading Birthday Story...</span>
      </div>
    </div>
  );
}
