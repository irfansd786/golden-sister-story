import { useState } from "react";

export function useGiftReveal() {
  const [opened, setOpened] = useState<number | null>(null);

  const openGift = (index: number) => {
    setOpened(index);
  };

  const closeGift = () => {
    setOpened(null);
  };

  return {
    opened,
    openGift,
    closeGift,
  };
}
