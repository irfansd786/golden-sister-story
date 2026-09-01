import { Star } from "lucide-react";

export function StarField() {
  const hangingLeft = [
    { left: "4%", height: "h-28", delay: "0s", size: 14 },
    { left: "10%", height: "h-16", delay: "0.6s", size: 10 },
    { left: "16%", height: "h-36", delay: "1.2s", size: 18 },
    { left: "22%", height: "h-24", delay: "0.3s", size: 12 },
  ];

  const hangingRight = [
    { right: "22%", height: "h-20", delay: "0.9s", size: 12 },
    { right: "16%", height: "h-32", delay: "0.4s", size: 16 },
    { right: "10%", height: "h-18", delay: "1.1s", size: 10 },
    { right: "4%", height: "h-36", delay: "0.1s", size: 18 },
  ];

  return (
    <>
      {/* Hanging Golden Stars on Top-Left */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10">
        {hangingLeft.map((item, i) => (
          <div
            key={`left-${i}`}
            className="absolute top-0 flex flex-col items-center"
            style={{ left: item.left }}
          >
            <div
              className={`w-[1px] ${item.height} bg-gradient-to-b from-gold/60 via-gold/30 to-gold/80`}
            />
            <Star
              className="animate-twinkle fill-gold text-gold-bright drop-shadow-[0_0_10px_rgba(244,201,93,0.9)]"
              size={item.size}
              style={{ animationDelay: item.delay }}
            />
          </div>
        ))}

        {/* Hanging Golden Stars on Top-Right */}
        {hangingRight.map((item, i) => (
          <div
            key={`right-${i}`}
            className="absolute top-0 flex flex-col items-center"
            style={{ right: item.right }}
          >
            <div
              className={`w-[1px] ${item.height} bg-gradient-to-b from-gold/60 via-gold/30 to-gold/80`}
            />
            <Star
              className="animate-twinkle fill-gold text-gold-bright drop-shadow-[0_0_10px_rgba(244,201,93,0.9)]"
              size={item.size}
              style={{ animationDelay: item.delay }}
            />
          </div>
        ))}
      </div>

      {/* Scattered Twinkling Background Stars */}
      {[...Array(28)].map((_, index) => (
        <Star
          key={index}
          size={index % 4 === 0 ? 12 : index % 2 === 0 ? 8 : 5}
          className="animate-twinkle absolute fill-gold/80 text-gold-bright"
          style={{
            left: `${((index * 23) % 94) + 3}%`,
            top: `${((index * 31) % 78) + 5}%`,
            opacity: 0.35 + (index % 5) * 0.15,
            animationDelay: `${(index * 0.17) % 2.5}s`,
          }}
        />
      ))}
    </>
  );
}
