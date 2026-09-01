import { Gift } from "lucide-react";
import { useGiftReveal } from "../../hooks/useGiftReveal";
import { AmbientBackground } from "../effects/AmbientBackground";
import { GiftGrid } from "./GiftGrid";
import { GiftReveal } from "./GiftReveal";

export function MysteryGifts() {
  const { opened, openGift } = useGiftReveal();

  return (
    <section id="gifts" className="night-section starfield relative py-24">
      <AmbientBackground />

      {/* Warm Fairy String Lights along the bottom matching Reference #7 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-around opacity-75">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-4 w-px bg-gold/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-gold-bright shadow-[0_0_10px_#ffd700]" />
          </div>
        ))}
      </div>

      <div className="section-inner">
        <div className="mb-12 text-center">
          <div className="section-kicker mb-3">Chapter seven</div>
          <h2 className="script-heading text-5xl text-cream sm:text-6xl">
            Which one will
            <br />
            you open? <Gift className="inline-block text-gold" size={28} />
          </h2>
        </div>

        <GiftGrid opened={opened} onOpen={openGift} />
        <GiftReveal opened={opened} />

        <p className="mt-8 text-center text-xs tracking-wider text-cream/60">
          Some surprises are unforgettable! <span className="text-pink-bright">❤️</span>
        </p>
      </div>
    </section>
  );
}
