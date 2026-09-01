import { REASONS_DATA } from "../../data/reasonsData";
import { ReasonCard } from "./ReasonCard";

export function ReasonGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {REASONS_DATA.map((reason, index) => (
        <ReasonCard
          key={reason.id}
          title={reason.title}
          desc={reason.desc}
          icon={reason.icon}
          delay={index * 0.06}
        />
      ))}
    </div>
  );
}
