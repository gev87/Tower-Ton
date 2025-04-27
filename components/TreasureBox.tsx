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
      <div className="absolute bottom-[-10px]">
        <video
          ref={videoRef}
          poster={sundukImg.src}
          className="cursor-pointer rounded-lg"
          onClick={handlePlay}
          onEnded={handleEnded}
          playsInline
          muted
          preload="metadata"
          controls={false}
          {...{ "webkit-playsinline": "true" }}
        >
          <source src="/videos/sunduk.webm" type="video/webm" />
          <source src="/videos/sunduk.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
