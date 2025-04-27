"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import sundukImg from "@/public/images/sunduk.png";

export default function TreasureBox() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (playing) {
      vid.pause();
      vid.currentTime = 0;
    } else {
      vid.muted = false; // Enable sound if allowed
      vid.play().catch((err) => {
        console.warn("Playback failed:", err);
      });
    }

    setPlaying(!playing);
  }, [playing]);

  const handleEnded = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.currentTime = 0;
    vid.pause();
    vid.load(); // Show poster again
    setPlaying(false);
  }, []);

  // iOS fix: set muted=true initially so video can load
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.muted = true;
  }, []);

  return (
    <div className="relative inline-block h-[123px] w-[142px] overflow-hidden">
      <div className="absolute bottom-[-20px]">
        <video
          ref={videoRef}
          // src="/videos/sunduk.webm"
          poster={sundukImg.src}
          className="cursor-pointer rounded-lg"
          onClick={handleToggle}
          onEnded={handleEnded}
          playsInline
          muted
          preload="metadata"
        >
          <source src="/videos/sunduk.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
