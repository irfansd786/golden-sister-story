import { Sparkles } from "lucide-react";

interface CakeEffectsProps {
  blown: boolean;
}

export function CakeEffects({ blown }: CakeEffectsProps) {
  return (
    <>
      <div
        className={`absolute inset-8 rounded-full bg-gold/20 blur-3xl ${blown ? "opacity-0" : "animate-pulse-glow"}`}
      />
      {blown && (
        <div className="absolute inset-0 flex items-center justify-center text-5xl text-gold">
          <Sparkles />
        </div>
      )}
    </>
  );
}
