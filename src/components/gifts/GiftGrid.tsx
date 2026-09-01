import { GIFTS_DATA } from "../../data/giftsData";
import { GiftBox } from "./GiftBox";

interface GiftGridProps {
  opened: number | null;
  onOpen: (index: number) => void;
}

export function GiftGrid({ opened, onOpen }: GiftGridProps) {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-12 sm:grid-cols-5 sm:gap-6">
      {GIFTS_DATA.map((gift, index) => (
        <GiftBox
          key={gift.id}
          index={index}
          colorClass={gift.colorClass}
          label={gift.label}
          opened={opened === index}
          onOpen={() => onOpen(index)}
        />
      ))}
    </div>
  );
}
