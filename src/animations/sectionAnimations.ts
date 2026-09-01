export const fadeInSection = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: (delay = 0) => ({ duration: 0.7, delay, ease: "easeOut" }),
};
