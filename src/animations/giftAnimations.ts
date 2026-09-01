export const giftBoxAnimation = (opened: boolean) => ({
  animate: opened ? { rotate: [0, -5, 5, 0] } : { y: [0, -4, 0] },
  transition: { duration: opened ? 0.45 : 3.5, repeat: opened ? 0 : Infinity },
});
