import { BALLOON_WISHES, BALLOON_COLORS } from "../../data/balloonsData";
import { Balloon } from "./Balloon";

interface BalloonGridProps {
  popped: number[];
  onPop: (index: number) => void;
}

export function BalloonGrid({ popped, onPop }: BalloonGridProps) {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-5 sm:gap-x-8">
      {BALLOON_WISHES.map((wish, index) => (
        <Balloon
          key={wish}
          wish={wish}
          index={index}
          popped={popped.includes(index)}
          onPop={() => onPop(index)}
          colorClass={BALLOON_COLORS[index % BALLOON_COLORS.length] || "balloon-pink"}
        />
      ))}
    </div>
  );
}
