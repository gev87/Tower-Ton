// components/MainButton.tsx
"use client";
import { useEffect } from "react";
import { useTelegram } from "@/hooks/useTelegram";
import type { ThemeParams } from "@twa-dev/types";

interface Props {
  text: string;
  onClick: () => void;
}

export default function MainButton({ text, onClick }: Props) {
  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;

    // full IntelliSense here 🎉
    tg.MainButton.setParams({
      text,
      color: tg.themeParams.button_color ?? "#2a9df4",
      text_color: (tg.themeParams as ThemeParams).button_text_color,
    });
    tg.MainButton.onClick(onClick);
    tg.MainButton.show();

    return () => {
      tg.MainButton.offClick(onClick);
      tg.MainButton.hide();
    };
  }, [tg, text, onClick]);

  return null;
}
