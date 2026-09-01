import { SectionWrapper } from "../../sections/SectionWrapper";

interface ReasonCardProps {
  title: string;
  desc: string;
  icon: string;
  delay: number;
}

export function ReasonCard({ title, desc, icon, delay }: ReasonCardProps) {
  return (
    <SectionWrapper delay={delay}>
      <div className="group rounded-lg border border-cream/10 bg-purple-surface/80 p-5 text-center transition hover:-translate-y-1 hover:border-pink-bright/65">
        <div className="mb-3 text-3xl text-pink-bright transition group-hover:text-gold">
          {icon}
        </div>
        <h3 className="font-serif text-xl text-cream">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-cream/55">{desc}</p>
      </div>
    </SectionWrapper>
  );
}
