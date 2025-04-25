import { faqIcon, soundIcon, walletIcon } from "@/public/icons";
import { tower, treasureBag, treasureChest } from "@/public/images";
import Image from "next/image";
import ProgressCard from "./ProgressCard";

function Header() {
    return (
      <header className="relative z-1 w-full flex-col bg-gradient-to-b from-[#132023] to-[rgba(26,44,49,0)] p-[16px_18px]">
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <button className="flex h-[40px] w-[46px] cursor-pointer items-center justify-center rounded-[4px] bg-[#2A4349]">
              <span className="bg-[radial-gradient(circle_at_0%_0%,#45A7F9_0%,#54C0F5_100%)] bg-clip-text font-semibold text-transparent">
                RU
              </span>
            </button>
            <button className="flex h-[40px] w-[46px] cursor-pointer items-center justify-center rounded-[4px] bg-[#2A4349]">
              <Image src={soundIcon} alt="sound"></Image>
            </button>
          </div>
          <div className="flex items-center font-[Jaro,_sans-serif] text-[40px] leading-none text-white">
            TOWER
          </div>
          <div className="flex gap-2">
            <button className="flex h-[40px] w-[46px] cursor-pointer items-center justify-center rounded-[4px] bg-[#2A4349]">
              <Image src={faqIcon} alt="FAQ"></Image>
            </button>
            <button className="flex h-[40px] w-[46px] cursor-pointer items-center justify-center rounded-[4px] bg-[#2A4349]">
              <Image src={walletIcon} alt="wallet"></Image>
            </button>
          </div>
        </div>
        <div className="mt-[18px] flex h-[43px] gap-[11px]">
          <button className="relative flex w-full flex-1 cursor-pointer items-center gap-[23px] rounded-[4px] bg-[#2A4349] pr-[8px] transition-colors duration-300 hover:bg-[rgb(29,47,52)]">
            <Image src={tower} alt="tower"></Image>
            <p className="flex flex-col font-semibold">
              <span className="text-[12px] text-white">1</span>
              <span className="text-[10px] text-[#87A3AB]">floor</span>
            </p>
          </button>
          <button className="relative flex w-full flex-1 cursor-pointer items-center gap-[23px] rounded-[4px] bg-[#2A4349] pr-[8px] transition-colors duration-300 hover:bg-[rgb(29,47,52)]">
            <Image src={treasureChest} alt="treasure chest"></Image>
            <p className="flex flex-col font-semibold">
              <span className="text-[12px] text-white">0</span>
              <span className="text-[10px] text-[#87A3AB]">Rating</span>
            </p>
          </button>
          <button className="relative flex w-full flex-1 cursor-pointer items-center gap-[23px] rounded-[4px] bg-[#2A4349] pr-[8px] transition-colors duration-300 hover:bg-[rgb(29,47,52)]">
            <Image src={treasureBag} alt="treasure bag"></Image>
            <p className="flex flex-col font-semibold">
              <span className="text-[12px] text-white">0</span>
              <span className="text-[10px] text-[#87A3AB]">TWR</span>
            </p>
          </button>
        </div>
        <div className="mt-[16px]">
          <ProgressCard
            progress={10}
            used={2}
            total={20}
            label="Used accelerations"
          />
        </div>
      </header>
    );
}
 export default Header;