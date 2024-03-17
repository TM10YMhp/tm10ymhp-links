import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "TM10YMhp - Links",
  description: "Links de TM10YMhp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={[
          "text-white",
          "before:bg-black/50 before:fixed before:inset-0 before:-z-10 before:min-h-screen",
          "after:bg-[url('/background.webp')] after:bg-[#32252A]",
          "after:bg-cover after:bg-top after:bg-no-repeat",
          "after:fixed after:inset-0 after:-z-20 after:min-h-dvh",
        ].join(" ")}
      >
        <main className="p-4 flex justify-center items-center min-h-screen [&>div]:!h-[unset]">
          {children}
        </main>
      </body>
      <GoogleTagManager gtmId="GTM-P9QXKTHC" />
    </html>
  );
}
