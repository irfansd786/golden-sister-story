import { Mail } from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "../../sections/SectionWrapper";
import { Envelope } from "./Envelope";
import { LetterModal } from "./LetterModal";

export function LetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="letter" className="warm-section py-24 text-night">
      <div className="section-inner grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">
        <SectionWrapper>
          <div className="section-kicker text-birthday-pink">Chapter six · from the heart</div>
          <h2 className="script-heading mt-4 text-7xl">
            A letter
            <br />
            for you<span className="text-birthday-pink">...</span>
          </h2>
          <button type="button" onClick={() => setOpen(true)} className="birthday-button mt-8">
            {open ? "Letter Opened" : "Open the Letter"} <Mail size={16} />
          </button>
        </SectionWrapper>
        <SectionWrapper className="relative min-h-[420px]" delay={0.15}>
          <Envelope open={open} />
          <LetterModal open={open} />
        </SectionWrapper>
      </div>
    </section>
  );
}
