import { AnimatePresence, motion } from "framer-motion";
import { GIFTS_DATA } from "../../data/giftsData";

interface GiftRevealProps {
  opened: number | null;
}

export function GiftReveal({ opened }: GiftRevealProps) {
  return (
    <AnimatePresence>
      {opened !== null && (
        <motion.p
          className="mt-12 text-center font-script text-3xl text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {GIFTS_DATA[opened]?.message ?? "A little surprise, just for you! ✨"}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
