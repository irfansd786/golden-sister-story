import { AmbientBackground } from "../effects/AmbientBackground";
import { SectionWrapper } from "../../sections/SectionWrapper";
import { FinalCake } from "./FinalCake";
import { CandleGlow } from "./CandleGlow";
import { WishEffects } from "./WishEffects";

export function FinalBirthdayWish() {
  return (
    <section id="finalwish" className="night-section starfield py-28">
      <AmbientBackground />
      <div className="section-inner grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <SectionWrapper>
          <div className="section-kicker">Chapter eleven · one more wish</div>
          <h2 className="script-heading mt-4 text-8xl text-cream">
            Happy
            <br />
            Birthday<span className="text-gold">!</span>
          </h2>
          <p className="mt-7 font-serif text-2xl leading-snug text-cream/70">
            May your day be as beautiful and
            <br />
            amazing as you are! <span className="text-pink-bright">♥</span>
          </p>
        </SectionWrapper>
        <SectionWrapper className="relative" delay={0.12}>
          <CandleGlow />
          <FinalCake />
          <WishEffects />
        </SectionWrapper>
      </div>
    </section>
  );
}
