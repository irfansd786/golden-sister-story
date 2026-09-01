export function createAudioPlayer(audioUrl: string): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  try {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    return audio;
  } catch (error) {
    console.warn("Audio creation failed:", error);
    return null;
  }
}
