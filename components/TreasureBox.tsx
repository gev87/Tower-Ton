"use client";

import { useRef, useState, useCallback } from "react";
import sundukImg from "@/public/images/sunduk.png";

export default function TreasureBox() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (playing) {
      vid.pause();
      // rewind when pausing
      vid.currentTime = 0;
    } else {
      vid.muted = false;
      vid.play();
    }

    setPlaying(!playing);
  }, [playing]);

  const handleEnded = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // rewind and reset to poster
    vid.currentTime = 0;
    vid.pause();
    // calling load() forces the poster to show
    vid.load();

    setPlaying(false);
  }, []);

  return (
    <div className="relative inline-block h-auto w-[142px]">
      <video
        ref={videoRef}
        src="/videos/sunduk.webm"
        poster={sundukImg.src}
        className="cursor-pointer rounded-lg"
        onClick={handleToggle}
        onEnded={handleEnded}
        playsInline
      />
    </div>
  );
}
