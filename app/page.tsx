// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useTelegram } from "@/hooks/useTelegram";
import MainButton from "@/components/MainButton";

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
    <main className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Tower Ton— Next.js Edition</h1>
      <p className="text-center opacity-80">
        This page is running both in a normal browser and inside Telegram.
      </p>

      <MainButton
        text="Continue"
        onClick={() => tg?.sendData(JSON.stringify({ step: "start" }))}
      />
    </main>
  );
}
