// components/ProgressCard.tsx
import { keyIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";

interface ProgressCardProps {
  /** 0–100 */
  progress: number;
  used: number;
  total: number;
  label?: string;
}

export default function ProgressCard({
  progress,
  used,
  total,
  label = "Использовано ускорений",
}: ProgressCardProps) {
  const pct = Math.min(100, Math.max(0, progress));

  return (
    <div className="w-full rounded-lg bg-[#132024] px-[12px] py-[8px]">
      <div className="flex w-[calc(100%_+_20px)] items-center space-x-3">
    
        <div className="relative z-1 flex-shrink-0">
          <div className="flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#E36414]">
            <Image src={keyIcon} width={16} height={16} alt="key" />
          </div>
        </div>
        <div className="relative right-5 h-4 flex-1 overflow-hidden rounded-full bg-[#2A4349]">
          <div
            className="h-full rounded-full bg-[#26BD37]"
            style={{ width: `${pct}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
            {pct}%
          </span>
        </div>
      </div>
      <div className="mt-2 flex justify-between text-sm text-[#87A3AB] text-[10px]">
        <span>{label}</span>
        <span>
          {used} / {total}
        </span>
      </div>
    </div>
  );
}
