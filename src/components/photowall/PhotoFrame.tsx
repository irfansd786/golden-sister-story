import { SectionWrapper } from "../../sections/SectionWrapper";
import { HangingPhoto } from "./HangingPhoto";
import { POLAROID_ROTATIONS } from "../../data/galleryData";

interface PhotoFrameProps {
  index: number;
  url?: string;
  delay: number;
}

export function PhotoFrame({ index, url, delay }: PhotoFrameProps) {
  const rotationClass = POLAROID_ROTATIONS[index % POLAROID_ROTATIONS.length];

  return (
    <SectionWrapper delay={delay}>
      <div className={`relative ${rotationClass} animate-sway`}>
        <HangingPhoto url={url} alt={`Memory ${index + 1}`} />
      </div>
    </SectionWrapper>
  );
}
