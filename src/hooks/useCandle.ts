import { useState } from "react";

export function useCandle() {
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    setBlown(true);
  };

  const resetCandles = () => {
    setBlown(false);
  };

  return {
    blown,
    blowCandles,
    resetCandles,
  };
}
