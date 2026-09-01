import { motion } from "framer-motion";

interface EnvelopeProps {
  open: boolean;
}

export function Envelope({ open }: EnvelopeProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[min(100%,530px)] -translate-x-1/2 -translate-y-1/2"
      animate={open ? { y: 70, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.65 }}
    >
      <div className="relative aspect-[1.45] rounded-md bg-birthday-pink shadow-2xl shadow-birthday-pink/25">
        <div className="absolute left-0 top-0 h-1/2 w-full origin-top bg-pink-bright/80 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-bright text-2xl text-cream shadow-lg">
          ♥
        </div>
      </div>
    </motion.div>
  );
}
