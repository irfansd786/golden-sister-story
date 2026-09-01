import { IMAGES } from "../../data/images";
import { PhotoFrame } from "./PhotoFrame";
import { PhotoWallControls } from "./PhotoWallControls";

export function PhotoWall() {
  return (
    <section id="photowall" className="night-section relative py-24">
      {/* Horizontal String Lines with Fairy Lights for Hanging Photos matching Reference #10 */}
      <div className="pointer-events-none absolute left-[5%] right-[5%] top-44 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="pointer-events-none absolute left-[5%] right-[5%] top-[55%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="section-inner">
        <div className="mb-12 text-center">
          <div className="section-kicker mb-3">Chapter ten</div>
          <h2 className="script-heading text-5xl text-cream sm:text-6xl">
            Moments We'll Always Remember <span className="text-pink-bright">♥</span>
          </h2>
        </div>
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-7 px-3 sm:grid-cols-4 sm:gap-10">
          {IMAGES.photoWall.map((url, index) => (
            <PhotoFrame key={index} index={index} url={url} delay={index * 0.035} />
          ))}
        </div>
        <PhotoWallControls />
      </div>
    </section>
  );
}
