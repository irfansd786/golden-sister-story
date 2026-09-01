import { Play } from "lucide-react";

interface GameScoreProps {
  score: number;
  started: boolean;
  onStart: () => void;
}

export function GameScore({ score, started, onStart }: GameScoreProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-center gap-5">
      <span className="rounded-full border border-cream/15 bg-purple-surface px-5 py-2 text-sm text-cream">
        Score: {score} / 10
      </span>
      <button type="button" className="birthday-button" onClick={onStart}>
        {started ? "Restart Game" : "Start Game"} <Play size={14} fill="currentColor" />
      </button>
    </div>
  );
}
