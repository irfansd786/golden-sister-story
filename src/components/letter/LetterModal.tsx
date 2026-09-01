import { AnimatePresence, motion } from "framer-motion";
import { LetterPaper } from "./LetterPaper";

interface LetterModalProps {
  open: boolean;
}

export function LetterModal({ open }: LetterModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 1 }}
          className="absolute left-1/2 top-1/2 max-h-[420px] w-[min(100%,500px)] -translate-x-1/2 -translate-y-1/2 overflow-auto bg-cream p-8 shadow-2xl shadow-night/30 sm:p-10"
        >
          <LetterPaper />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
