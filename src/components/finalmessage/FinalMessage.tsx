import { AmbientBackground } from "../effects/AmbientBackground";
import { SectionWrapper } from "../../sections/SectionWrapper";
import { FinalQuote } from "./FinalQuote";
import { ReplayJourney } from "./ReplayJourney";
import { FinalDecorations } from "./FinalDecorations";

export function FinalMessage() {
  return (
    <section
      id="finalmessage"
      className="night-section starfield flex min-h-[100svh] items-center justify-center py-24 text-center"
    >
      <AmbientBackground />
      <FinalDecorations />
      <div className="relative z-10 px-6">
        <SectionWrapper>
          <FinalQuote />
          <ReplayJourney />
        </SectionWrapper>
      </div>
    </section>
  );
}
