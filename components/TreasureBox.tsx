"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import sundukImg from "@/public/images/sunduk.png";

export default function TreasureBox() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid || isPlaying) return;

  vid
    .play()
    .then(() => {
      vid.muted = false; // Unmute after successful play
    })
    .catch((err) => {
      console.warn("Playback failed:", err);
    });

    setIsPlaying(true);
  }, [isPlaying]);

  const handleEnded = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.currentTime = 0;
    vid.pause();
    vid.load(); // Show poster again
    setIsPlaying(false);
  }, []);

  // iOS fix: set muted=true initially so video can load
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.muted = true;
  }, []);

  return (
    <div className="relative inline-block h-[123px] w-[142px] overflow-hidden">
      <div className="absolute bottom-[-20px]" />
        <video
          ref={videoRef}
          src="/videos/sunduk.webm"
          poster={sundukImg.src}
          className="cursor-pointer rounded-lg"
          onClick={handlePlay}
          onEnded={handleEnded}
          playsInline
          muted
          controls={false}
          preload="metadata"
        />
     
    </div>
  );
}
