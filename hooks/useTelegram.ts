// hooks/useTelegram.ts
import { useEffect, useState } from "react";
import type { WebApp } from "@twa-dev/types"; // 100 % typed API surface

export const useTelegram = () => {
  const [tg, setTg] = useState<WebApp | null>(null);

  useEffect(() => {
    // compile‑time safety ✅
    setTg(window.Telegram?.WebApp ?? null);
  }, []);

  return tg;
};
