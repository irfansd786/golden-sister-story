import { LandingSection } from "../components/landing/LandingSection";
import { BirthdayWelcome } from "../components/welcome/BirthdayWelcome";
import { InteractiveCake } from "../components/cake/InteractiveCake";
import { StoryTimeline } from "../components/timeline/StoryTimeline";
import { MemoryGallery } from "../components/gallery/MemoryGallery";
import { LetterSection } from "../components/letter/LetterSection";
import { MysteryGifts } from "../components/gifts/MysteryGifts";
import { BirthdayGame } from "../components/game/BirthdayGame";
import { ReasonsSection } from "../components/reasons/ReasonsSection";
import { PhotoWall } from "../components/photowall/PhotoWall";
import { FinalBirthdayWish } from "../components/finalwish/FinalBirthdayWish";
import { FinalMessage } from "../components/finalmessage/FinalMessage";

export function BirthdayJourney() {
  return (
    <div className="birthday-journey">
      <LandingSection />
      <BirthdayWelcome />
      <InteractiveCake />
      <StoryTimeline />
      <MemoryGallery />
      <LetterSection />
      <MysteryGifts />
      <BirthdayGame />
      <ReasonsSection />
      <PhotoWall />
      <FinalBirthdayWish />
      <FinalMessage />
    </div>
  );
}
