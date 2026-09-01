export function GlowEffects() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-surface/80 to-transparent" />
      <div className="absolute bottom-0 left-0 h-28 w-1/3 rounded-full bg-lavender/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-28 w-1/3 rounded-full bg-pink-bright/15 blur-3xl" />
      <div className="absolute bottom-[-2rem] left-1/2 h-28 w-[120%] -translate-x-1/2 rounded-[50%] bg-purple-light/40 blur-xl" />
    </>
  );
}
