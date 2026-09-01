export const balloonFloatAnimation = (index: number) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 3 + index * 0.2, repeat: Infinity, delay: index * 0.15 },
});
