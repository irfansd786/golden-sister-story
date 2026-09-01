import { SectionWrapper } from "../../sections/SectionWrapper";
import { WelcomeContent } from "./WelcomeContent";
import { WelcomeDecorations } from "./WelcomeDecorations";

export function BirthdayWelcome() {
  return (
    <section id="welcome" className="warm-section min-h-[720px] py-24 text-night">
      <div className="section-inner grid min-h-[560px] items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <SectionWrapper className="order-2 max-w-md lg:order-1">
          <WelcomeContent />
        </SectionWrapper>
        <SectionWrapper className="order-1 relative lg:order-2" delay={0.12}>
          <WelcomeDecorations />
        </SectionWrapper>
      </div>
    </section>
  );
}
