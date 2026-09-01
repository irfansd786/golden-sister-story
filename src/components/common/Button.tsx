import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../utils/helpers";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  href,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClass = cn(
    variant === "primary"
      ? "birthday-button"
      : "rounded-full border border-cream/20 bg-night/75 px-4 py-2 text-xs text-cream hover:border-pink-bright/70",
    className,
  );

  if (href) {
    return (
      <motion.a href={href} className={baseClass} whileTap={{ scale: 0.97 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" className={baseClass} whileTap={{ scale: 0.97 }} {...props}>
      {children}
    </motion.button>
  );
}
