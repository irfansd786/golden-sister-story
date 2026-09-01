interface CandleProps {
  index: number;
  blown: boolean;
}

export function Candle({ index, blown }: CandleProps) {
  return (
    <span className="relative h-24 w-1.5 bg-pink-bright sm:h-32">
      <i
        className={`absolute -top-5 left-1/2 h-7 w-3 -translate-x-1/2 rounded-full bg-gold-bright blur-[1px] ${blown ? "opacity-0" : "animate-flicker"}`}
        style={{ animationDelay: `${index * 0.15}s` }}
      />
      {blown && (
        <i className="animate-smoke absolute -top-5 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-cream/20 blur-md" />
      )}
    </span>
  );
}
