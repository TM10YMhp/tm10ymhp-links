import type { Metadata } from "next";
// import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TM10YMhp - Links",
  description: "Links de TM10YMhp",
  // other: {
  //   "google-site-verification": "eZTmyiIJ2XOcG4d3cb9XmuXJxxPQFBx9ODu0f43daDc",
  // },
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
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P9QXKTHC');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9QXKTHC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <main className="p-4 flex justify-center items-center min-h-screen [&>div]:!h-[unset]">
          {children}
        </main>
      </body>
      {/* <GoogleTagManager gtmId="GTM-P9QXKTHC" /> */}
    </html>
  );
}
