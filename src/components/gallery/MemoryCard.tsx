import { SectionWrapper } from "../../sections/SectionWrapper";
import { PolaroidCard } from "./PolaroidCard";

interface MemoryCardProps {
  caption: string;
  rotationClass: string;
  url?: string;
  delay: number;
  onClick: () => void;
}

export function MemoryCard({ caption, rotationClass, url, delay, onClick }: MemoryCardProps) {
  return (
    <SectionWrapper delay={delay}>
      <PolaroidCard caption={caption} rotationClass={rotationClass} url={url} onClick={onClick} />
    </SectionWrapper>
  );
}
