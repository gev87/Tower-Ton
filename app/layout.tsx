import { Jaro, Montserrat } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const jaro = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import Script from "next/script";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Tower Ton",
  description: "Tower Ton is a Telegram Web App for the Tower Ton project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${jaro.className} ${montserrat.variable} ${jaro.variable} min-h-[var(--tg-viewport-height)] bg-[--tg-theme-bg-color] text-[--tg-theme-text-color] antialiased`}
      >
        {/* Telegram injects CSS variables for colors */}
        <Script
          id="tg-sdk"
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        {children}

        {/* <main className="flex-1 overflow-auto">{children}</main> */}
        {/* <main className="relative flex  h-screen flex-col overflow-hidden">
          <Header />
          <Image
            src="/images/tower-bg.png"
            alt="tower" // decorative, so empty alt
            fill // covers the parent div
            style={{ objectPosition: "center" }}
            priority // load immediately
          />

          <Footer />
        </main> */}
      </body>
    </html>
  );
}
