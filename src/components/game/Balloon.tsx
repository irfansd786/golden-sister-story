import { motion } from "framer-motion";
import { cn } from "../../utils/helpers";

interface BalloonProps {
  wish: string;
  index: number;
  popped: boolean;
  onPop: () => void;
  colorClass: string;
}

export function Balloon({ wish, index, popped, onPop, colorClass }: BalloonProps) {
  return (
    <motion.button
      type="button"
      onClick={onPop}
      className={cn(
        "balloon-shape flex items-center justify-center px-2 text-center font-serif text-xs text-cream",
        colorClass,
        popped && "balloon-popped",
      )}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3 + index * 0.2, repeat: Infinity, delay: index * 0.15 }}
    >
      {wish}
    </motion.button>
  );
}
