import { AnimatePresence, motion } from "framer-motion";

interface WishTextProps {
  blown: boolean;
}

export function WishText({ blown }: WishTextProps) {
  return (
    <AnimatePresence>
      {blown && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 font-script text-3xl text-gold"
        >
          Make your wish! ✨
        </motion.p>
      )}
    </AnimatePresence>
  );
}
