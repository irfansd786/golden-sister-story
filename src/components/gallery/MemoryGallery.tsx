import { Camera } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "../../data/images";
import { POLAROID_ROTATIONS } from "../../data/galleryData";
import { AmbientBackground } from "../effects/AmbientBackground";
import { MemoryCard } from "./MemoryCard";
import { GalleryControls } from "./GalleryControls";
import { ImagePreview } from "./ImagePreview";

export function MemoryGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="night-section starfield py-24">
      <AmbientBackground />
      <div className="section-inner">
        <div className="mb-12 text-center">
          <div className="section-kicker mb-3">Chapter five</div>
          <h2 className="script-heading text-5xl text-cream sm:text-6xl">
            Memory Gallery <Camera className="inline-block text-gold" size={29} />
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
          {IMAGES.memories.map((photo, index) => (
            <MemoryCard
              key={photo.caption}
              caption={photo.caption}
              rotationClass={POLAROID_ROTATIONS[index % POLAROID_ROTATIONS.length] || "polaroid-a"}
              url={photo.url}
              delay={index * 0.06}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
        <GalleryControls onClick={() => setSelected(0)} />
      </div>
      <ImagePreview selected={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
