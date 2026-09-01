import { IMAGES } from "../../data/images";

export function CakeBody() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cream/20 bg-purple-surface/40 p-2 shadow-2xl backdrop-blur-sm">
      <img
        src={IMAGES.interactiveCake}
        alt="Interactive Birthday Cake"
        className="h-[380px] w-full object-cover rounded-xl"
      />
    </div>
  );
}
