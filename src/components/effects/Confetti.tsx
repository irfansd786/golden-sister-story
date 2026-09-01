import { motion } from "framer-motion";

export function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-gold"
          initial={{ top: "0%", left: `${(i * 8.5) % 100}%`, opacity: 1 }}
          animate={{ top: "100%", opacity: 0 }}
          transition={{ duration: 2.5 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
