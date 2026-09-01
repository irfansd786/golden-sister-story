import { CakeSlice, Check } from "lucide-react";
import { useCandle } from "../../hooks/useCandle";
import { AmbientBackground } from "../effects/AmbientBackground";
import { SectionWrapper } from "../../sections/SectionWrapper";
import { CakeBody } from "./CakeBody";
import { CandleGroup } from "./CandleGroup";
import { WishText } from "./WishText";
import { CakeEffects } from "./CakeEffects";

export function InteractiveCake() {
  const { blown, blowCandles } = useCandle();

  return (
    <section id="cake" className="night-section starfield min-h-[720px] py-24">
      <AmbientBackground />
      <div className="section-inner grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <SectionWrapper className="max-w-md">
          <div className="section-kicker">Chapter three · make it count</div>
          <h2 className="script-heading mt-4 text-7xl text-cream">
            Make a<br />
            Wish<span className="text-gold">...</span>
          </h2>
          <p className="mt-7 font-serif text-2xl leading-snug text-cream/75">
            Blow the candles
            <br />
            and let's begin the celebration!
          </p>
          <button type="button" className="birthday-button mt-8" onClick={blowCandles}>
            {blown ? (
              <>
                <Check size={16} /> Wish Made
              </>
            ) : (
              <>
                <CakeSlice size={16} /> Blow Candles
              </>
            )}
          </button>
          <WishText blown={blown} />
        </SectionWrapper>
        <SectionWrapper className="relative" delay={0.14}>
          <CakeEffects blown={blown} />
          <div className="relative mx-auto max-w-[620px]">
            <CakeBody />
            <CandleGroup blown={blown} />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
