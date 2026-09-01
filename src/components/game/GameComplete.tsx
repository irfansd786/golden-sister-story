import { AnimatePresence, motion } from "framer-motion";

interface GameCompleteProps {
  completed: boolean;
}

export function GameComplete({ completed }: GameCompleteProps) {
  return (
    <AnimatePresence>
      {completed && (
        <motion.div
          className="mt-14 text-center font-script text-4xl text-gold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          You're the star of today! ✨
        </motion.div>
      )}
    </AnimatePresence>
  );
}
