import { Sparkles } from "lucide-react";

export function GameEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <Sparkles className="animate-spin text-gold/30" size={120} />
    </div>
  );
}
