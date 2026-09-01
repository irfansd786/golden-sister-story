export function FloatingParticles() {
  return (
    <>
      <span className="absolute bottom-[20%] left-[22%] h-2 w-2 rounded-full bg-gold/50 blur-[2px] animate-float-up" />
      <span
        className="absolute right-[30%] top-[46%] h-3 w-3 rounded-full bg-pink-bright/30 blur-[4px] animate-float-up"
        style={{ animationDelay: "2.1s" }}
      />
    </>
  );
}
