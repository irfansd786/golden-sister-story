import { ArrowDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="mt-12 flex justify-center text-cream/70">
      <ArrowDown className="animate-bounce" size={21} />
    </div>
  );
}
