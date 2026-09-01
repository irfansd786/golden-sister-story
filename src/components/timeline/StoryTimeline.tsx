import { IMAGES } from "../../data/images";
import { TimelineItem } from "./TimelineItem";
import { TimelineControls } from "./TimelineControls";

export function StoryTimeline() {
  return (
    <section id="timeline" className="night-section py-24">
      <div className="section-inner">
        <div className="mb-12 text-center">
          <div className="section-kicker mb-3">Chapter four</div>
          <h2 className="script-heading text-5xl text-cream sm:text-6xl">
            Our Little Story <span className="text-pink-bright">♥</span>
          </h2>
        </div>
        <div className="relative grid gap-10 md:grid-cols-5 md:gap-3">
          <div className="absolute left-[10%] right-[10%] top-24 hidden h-px bg-gradient-to-r from-pink-bright via-gold to-pink-bright opacity-80 md:block" />
          {IMAGES.story.map((item, index) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              url={item.url}
              delay={index * 0.08}
            />
          ))}
        </div>
        <TimelineControls />
      </div>
    </section>
  );
}
