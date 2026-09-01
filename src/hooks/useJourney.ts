import { useState } from "react";
import { scrollToSection } from "../utils/scrollUtils";

export function useJourney() {
  const [currentSection, setCurrentSection] = useState("landing");

  const navigateTo = (sectionId: string) => {
    setCurrentSection(sectionId);
    scrollToSection(sectionId);
  };

  const restartJourney = () => {
    setCurrentSection("landing");
    scrollToSection("landing");
  };

  return {
    currentSection,
    navigateTo,
    restartJourney,
  };
}
