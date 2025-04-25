// app/page.tsx
"use client";
import { useEffect } from "react";
import { useTelegram } from "@/hooks/useTelegram";
// import MainButton from "@/components/MainButton";
import Image from "next/image";
import { tonIcon } from "@/public/icons";
import {
  dragonGroup,
  gnomAnimation,
  keyGroup,
  spiderGroup,
  starGroup,
  swordGroup,
  toolsGroup,
  towerGroup,
} from "@/public/images";
import TreasureBox from "@/components/TreasureBox";
import Header from "@/components/Header";
import FooterNav from "@/components/FooterNav";

// interface UserData {
//   id: number;
//   first_name: string;
//   last_name?: string;
//   username?: string;
//   language_code: string;
//   is_premium?: boolean;
// }

export default function Home() {
  // const [userData, setUserData] = useState<UserData | null>(null);

  const tg = useTelegram();

  // useEffect(() => {
  //   if (WebApp.initDataUnsafe.user) {
  //     setUserData(WebApp.initDataUnsafe.user);
  //   }
  // },[])

  useEffect(() => {
    tg?.ready(); // hide Telegram’s spinner
    tg?.expand(); // use full height if you want
  }, [tg]);

  return (
    <div className="relative flex  h-screen flex-col overflow-hidden">
      <Header />
      <Image
        src="/images/tower-bg.png"
        alt="tower"
        fill
        style={{ objectPosition: "center" }}
        priority
      />
      <div className="flex h-full justify-between">
        <div className="flex flex-col justify-between gap-[8px] ">
          <div className="flex flex-col gap-[8px]">
            <button className="relative z-1 ml-[16px] inline-block cursor-pointer">
              <Image
                src={dragonGroup}
                alt="dragon"
                width={160}
                height={63}
                priority
              />
              <div className="absolute top-[21px] left-10 z-1 text-[8px] leading-[120%] text-[#1A2A2E] ">
                <div className="font-extrabold">TREASURES OF SMAUG</div>
                <div className="mt-[2px] flex items-center justify-center gap-1 font-[Jaro] text-[10px] leading-[12px]">
                  <Image src={tonIcon} alt="TON" />
                  350 TON
                </div>
              </div>
            </button>
            <button className="relative right-2 z-1 mt-[4px] ml-[16px] cursor-pointer">
              <Image
                src={swordGroup}
                alt="sword"
                width={144}
                height={60}
                priority
              />

              <div className="absolute top-[33px] left-14 z-1 text-[8px] leading-[140%] font-extrabold text-[#1A2A2E]">
                CITY OF HEROES
              </div>
            </button>
            <button className="relative left-1 z-1 mt-[10px] ml-[16px] cursor-pointer">
              <Image
                src={towerGroup}
                alt="tower"
                width={111}
                height={46}
                priority
              />

              <div className="absolute top-[17px] left-14 z-1 text-[8px] leading-[140%] font-extrabold text-[#1A2A2E]">
                TOWER
              </div>
            </button>
            <button className="relative left-1 z-1 ml-[16px] cursor-pointer">
              <Image
                src={spiderGroup}
                alt="spider-group"
                width={111}
                height={46}
                priority
              />

              <div className="absolute top-[17px] left-12 z-1 text-[8px] leading-[140%] font-extrabold text-[#1A2A2E]">
                PASSWORD
              </div>
            </button>
          </div>
          <TreasureBox />
        </div>
        <div className="flex flex-col items-end justify-between gap-[8px]">
          <div className="flex flex-col items-end gap-[8px]">
            <button className="relative top-2.5 z-1 mr-[18px] cursor-pointer">
              <Image
                src={starGroup}
                alt="star-group"
                width={110}
                height={45}
                priority
              />
              <div className="absolute top-[5px] left-15 z-1  font-extrabold text-[#1A2A2E]">
                <div className="text-[18px] leading-[100%]">+15</div>
                <div className="text-[9px] leading-[12px]">KEYS</div>
              </div>
            </button>

            <button className="relative top-2.5 z-1 mr-[18px] cursor-pointer">
              <Image
                src={toolsGroup}
                alt="tools-group"
                width={110}
                height={45}
                priority
              />
              <div className="absolute top-[15px] left-12 z-1  font-extrabold text-[#1A2A2E]">
                <div className="text-[18px] leading-[100%]">+10%</div>
              </div>
            </button>
            <button className="relative top-2.5 z-1 mr-[18px] cursor-pointer">
              <Image
                src={keyGroup}
                alt="key-group"
                width={110}
                height={45}
                priority
              />
              <div className="absolute top-[12px] left-14 z-1  font-extrabold text-[#1A2A2E]">
                <div className="text-[9px] leading-[120%]">
                  QUICK <br />
                  KEY
                </div>
              </div>
            </button>
          </div>
          <div className="relative h-[250px] w-[250px]">
            <Image
              src={gnomAnimation}
              alt="gnom animation"
              width={gnomAnimation.width}
              height={gnomAnimation.height}
              unoptimized
              className="h-auto w-full scale-x-[-1] transform"
            />
            <button className="absolute top-[30px] right-[5px] h-full w-[150px] cursor-pointer"></button>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}

//  <div className="relative z-10 flex cursor-pointer flex-col items-center gap-4 p-6 pr-[8px]">
//    {/* <h1 className="text-2xl font-bold">Tower Ton—Next.js Edition</h1>
//     <p className="text-center opacity-80">
//       This page is running both in a normal browser and inside Telegram.
//     </p> */}

//    <MainButton
//      text="Continue"
//      onClick={() => tg?.sendData(JSON.stringify({ step: "start" }))}
//    />
//  </div>;
