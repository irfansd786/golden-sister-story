export function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  } else if (sectionId === "landing") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
