import { useBirthdayGame } from "../../hooks/useBirthdayGame";
import { GameIntro } from "./GameIntro";
import { GameScore } from "./GameScore";
import { BalloonGrid } from "./BalloonGrid";
import { GameComplete } from "./GameComplete";

export function BalloonGame() {
  const { started, popped, score, pop, startGame, isCompleted } = useBirthdayGame();

  return (
    <section id="game" className="night-section py-24">
      <div className="section-inner">
        <GameIntro />
        <GameScore score={score} started={started} onStart={startGame} />
        <BalloonGrid popped={popped} onPop={pop} />
        <GameComplete completed={isCompleted} />
      </div>
    </section>
  );
}
