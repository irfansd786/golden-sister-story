import { useState } from "react";

export function useBirthdayGame(totalBalloons = 10) {
  const [started, setStarted] = useState(false);
  const [popped, setPopped] = useState<number[]>([]);

  const pop = (index: number) => {
    if (started && !popped.includes(index)) {
      setPopped((items) => [...items, index]);
    }
  };

  const startGame = () => {
    setStarted(true);
    setPopped([]);
  };

  const isCompleted = popped.length === totalBalloons;

  return {
    started,
    popped,
    score: popped.length,
    totalBalloons,
    isCompleted,
    pop,
    startGame,
  };
}
