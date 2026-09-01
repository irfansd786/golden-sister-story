import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export function IconButton({ children, onClick, className = "", ariaLabel }: IconButtonProps) {
  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full p-2 text-cream/70 transition hover:text-cream",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
