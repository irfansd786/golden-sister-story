import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { StarField } from "../effects/StarField";
import { DreamyClouds } from "../effects/DreamyClouds";
import { LandingContent } from "./LandingContent";
import { SurpriseButton } from "./SurpriseButton";
import { ScrollIndicator } from "../common/ScrollIndicator";

export function LandingSection() {
  return (
    <section
      id="landing"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#080718] via-[#100B25] to-[#17102F]"
    >
      {/* Radial Atmospheric Glow behind center content */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(233, 75, 131, 0.22) 0%, rgba(58, 22, 71, 0.2) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Hanging Stars & Twinkling Sky */}
      <StarField />

      {/* Multi-layered CSS/SVG Dreamy Clouds at bottom */}
      <DreamyClouds />

      {/* Top Left Heart Control matching Reference #1 */}
      <button
        type="button"
        aria-label="Favorite"
        className="fixed left-5 top-5 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-[#100B25]/75 text-pink-bright backdrop-blur-md transition hover:border-pink-bright hover:bg-[#17102F]"
      >
        <Heart size={16} fill="currentColor" />
      </button>

      {/* Main Centered Content (slightly above center) */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pb-12 pt-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <LandingContent />
          <SurpriseButton />
          <ScrollIndicator />
        </motion.div>
      </div>
    </section>
  );
}
