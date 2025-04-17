// global.d.ts  (root of the repo)
import type { WebApp } from "@twa-dev/types"; // or "@types/telegram-web-app"

declare global {
  interface Window {
    Telegram?: { WebApp: WebApp };
  }
}
