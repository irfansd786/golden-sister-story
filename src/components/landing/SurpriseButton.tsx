import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { SECTION_IDS } from "../../utils/constants";
import { scrollToSection } from "../../utils/scrollUtils";

export function SurpriseButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection(SECTION_IDS.WELCOME);
  };

  return (
    <motion.a
      href={`#${SECTION_IDS.WELCOME}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E94B83] to-[#FF5A91] px-7 py-3 font-sans text-sm font-semibold text-white shadow-[0_8px_30px_rgba(233,75,131,0.45)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(255,90,145,0.6)]"
    >
      <span>Open Your Surprise</span>
      <Gift size={16} className="text-white" />
    </motion.a>
  );
}
