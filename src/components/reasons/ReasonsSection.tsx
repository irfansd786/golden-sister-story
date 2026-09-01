import { AmbientBackground } from "../effects/AmbientBackground";
import { SectionWrapper } from "../../sections/SectionWrapper";
import { ReasonGrid } from "./ReasonGrid";

export function ReasonsSection() {
  return (
    <section id="reasons" className="night-section starfield relative py-24">
      <AmbientBackground />

      {/* Hanging Fairy String Lights at top matching Reference #9 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-around opacity-75">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="h-6 w-px bg-gold/40" />
            <div className="h-2 w-2 rounded-full bg-gold-bright shadow-[0_0_8px_#ffd700]" />
          </div>
        ))}
      </div>

      <div className="section-inner grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <SectionWrapper>
          <div className="section-kicker">Chapter nine · just because</div>
          <h2 className="script-heading mt-4 text-7xl text-cream">
            Reasons
            <br />
            You're
            <br />
            Special <span className="text-pink-bright">♥</span>
          </h2>
          <p className="mt-6 max-w-xs font-serif text-lg leading-relaxed text-cream/65">
            Just a few of the million reasons why you mean so much.
          </p>
        </SectionWrapper>
        <ReasonGrid />
      </div>
    </section>
  );
}
