import { ArrowLeft, ArrowRight } from "lucide-react";

export function TimelineControls() {
  return (
    <div className="mt-12 flex justify-center gap-2 text-pink-bright">
      <ArrowLeft size={17} />
      <span className="h-2 w-2 rounded-full bg-pink-bright" />
      <span className="h-2 w-2 rounded-full bg-cream/25" />
      <span className="h-2 w-2 rounded-full bg-cream/25" />
      <ArrowRight size={17} />
    </div>
  );
}
