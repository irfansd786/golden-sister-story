import { useEffect, useRef, useState } from "react";
import { AUDIO_FILE_PATH } from "../utils/constants";
import { createAudioPlayer } from "../utils/audioUtils";

export function useMusic() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = createAudioPlayer(AUDIO_FILE_PATH);
    audioRef.current = audio;

    return () => {
      if (audio) {
        audio.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) {
      setPlaying((prev) => !prev);
      return;
    }

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => {
          console.warn("Audio play failed or file missing:", err);
          // Fallback UI toggle state so button still works gracefully
          setPlaying((prev) => !prev);
        });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
    }
    setMuted((prev) => !prev);
  };

  return {
    playing,
    muted,
    togglePlay,
    toggleMute,
  };
}
