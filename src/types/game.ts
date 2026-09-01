export interface BalloonItem {
  id: number;
  wishText: string;
  colorClass: string;
}

export interface GameState {
  started: boolean;
  poppedIds: number[];
  score: number;
}
