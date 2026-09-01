import { SectionWrapper } from "../../sections/SectionWrapper";
import { TimelineImage } from "./TimelineImage";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  url?: string;
  delay: number;
}

export function TimelineItem({ title, subtitle, url, delay }: TimelineItemProps) {
  return (
    <SectionWrapper className="relative z-10 text-center" delay={delay}>
      <TimelineImage url={url} alt={title} />
      <h3 className="font-serif text-lg text-cream">{title}</h3>
      <p className="mx-auto mt-2 max-w-[140px] text-xs leading-relaxed text-cream/60">{subtitle}</p>
    </SectionWrapper>
  );
}
