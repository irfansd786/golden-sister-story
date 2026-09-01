import { Candle } from "./Candle";

interface CandleGroupProps {
  blown: boolean;
  count?: number;
}

export function CandleGroup({ blown, count = 7 }: CandleGroupProps) {
  return (
    <div
      className={`absolute left-1/2 top-[8%] flex -translate-x-1/2 gap-4 transition-opacity ${blown ? "opacity-40" : ""}`}
    >
      {[...Array(count)].map((_, i) => (
        <Candle key={i} index={i} blown={blown} />
      ))}
    </div>
  );
}
