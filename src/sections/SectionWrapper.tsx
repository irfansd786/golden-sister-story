import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/helpers";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function SectionWrapper({ children, className = "", delay = 0, id }: SectionWrapperProps) {
  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
