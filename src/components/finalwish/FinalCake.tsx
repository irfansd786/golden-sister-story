import { IMAGES } from "../../data/images";

export function FinalCake() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cream/20 bg-purple-surface/40 p-2 shadow-2xl backdrop-blur-sm">
      <img
        src={IMAGES.finalCake}
        alt="Final Birthday Wish Cake"
        className="h-[380px] w-full object-cover rounded-xl"
      />
    </div>
  );
}
