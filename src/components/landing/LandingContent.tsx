export function LandingContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* Small Eyebrow Text */}
      <div className="mb-3 text-[0.65rem] tracking-[0.3em] uppercase font-semibold text-[#F4C95D] drop-shadow-[0_2px_8px_rgba(244,201,93,0.4)] sm:text-xs">
        A LITTLE SURPRISE FOR YOU
      </div>

      {/* Script Main Heading matching Pic 2 */}
      <h1 className="font-script text-6xl leading-[0.95] text-[#FFF3E6] drop-shadow-[0_4px_24px_rgba(244,201,93,0.35)] sm:text-8xl lg:text-9xl">
        Something
        <br />
        Special
      </h1>

      {/* Italic Subtitle matching Pic 2 */}
      <p className="mt-4 font-serif text-xl italic text-[#FFF3E6]/90 sm:text-2xl">
        is waiting for you...
      </p>
    </div>
  );
}
