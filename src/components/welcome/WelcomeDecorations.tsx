import { IMAGES } from "../../data/images";

export function WelcomeDecorations() {
  return (
    <div className="relative mx-auto max-w-lg">
      {/* Soft warm glow behind cake */}
      <div className="absolute inset-0 rounded-full bg-pink-bright/20 blur-3xl" />

      {/* Decorative Gold & Pink Balloons flanking the cake */}
      <div className="absolute -left-12 top-4 h-24 w-20 rounded-full bg-gradient-to-tr from-gold to-gold-bright shadow-lg animate-float-up" />
      <div
        className="absolute -right-10 top-12 h-28 w-24 rounded-full bg-gradient-to-tr from-birthday-pink to-pink-bright shadow-lg animate-float-up"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Cake Image Container matching Reference #2 */}
      <div className="relative overflow-hidden rounded-2xl border-4 border-cream bg-cream/30 p-2 shadow-2xl backdrop-blur-sm">
        <img
          src={IMAGES.welcomeCake}
          alt="Happy Birthday Cake"
          className="h-[360px] w-full object-cover rounded-xl shadow-inner"
        />
      </div>

      {/* Decorative Flowers and Heart Badge */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-cream/95 px-4 py-1.5 text-birthday-pink shadow-md">
        <span className="text-xl">🌸</span>
        <span className="font-script text-2xl font-bold">Happy Birthday</span>
        <span className="text-xl">🌸</span>
      </div>
    </div>
  );
}
