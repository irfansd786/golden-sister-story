export function FloatingHearts() {
  return (
    <>
      <span className="absolute left-[12%] top-[28%] text-lg text-pink-bright/70 animate-float-up">
        ♥
      </span>
      <span
        className="absolute right-[18%] top-[24%] text-sm text-pink-bright/60 animate-float-up"
        style={{ animationDelay: "1.3s" }}
      >
        ♥
      </span>
    </>
  );
}
