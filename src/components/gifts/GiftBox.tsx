import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "../../utils/helpers";

interface GiftBoxProps {
  index: number;
  colorClass: string;
  label: string;
  opened: boolean;
  onOpen: () => void;
}

export function GiftBox({ index, colorClass, label, opened, onOpen }: GiftBoxProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col items-center gap-4 text-center"
    >
      <motion.div
        className={cn("gift-box", colorClass, opened && "open")}
        animate={opened ? { rotate: [0, -5, 5, 0] } : { y: [0, -4, 0] }}
        transition={{ duration: opened ? 0.45 : 3.5, repeat: opened ? 0 : Infinity }}
      >
        <span className="gift-lid" />
        <span className="gift-bow" />
        {opened && <Sparkles className="absolute -right-5 -top-8 text-gold-bright" size={24} />}
      </motion.div>
      <span className="text-sm text-cream/75">{label}</span>
    </button>
  );
}
