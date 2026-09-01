export function FinalDecorations() {
  return (
    <>
      {/* Crescent Moon matching Reference #12 */}
      <div className="absolute right-[10%] top-[12%] z-10 text-6xl text-gold-bright drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] animate-pulse-glow">
        ☾
      </div>

      {/* Silhouette of Trees at the bottom matching Reference #12 */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-night-deep via-night-deep/80 to-transparent opacity-90" />

      {/* Floral Corner Accents matching Reference #12 */}
      <div className="floral-corner left text-pink-bright">✿</div>
      <div className="floral-corner right text-pink-bright">✿</div>
    </>
  );
}
