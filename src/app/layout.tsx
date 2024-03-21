import type { Metadata } from "next";
import styles from "./layout.module.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "TM10YMhp - Links",
  description: "Links de TM10YMhp",
  other: {
    "google-site-verification": "eZTmyiIJ2XOcG4d3cb9XmuXJxxPQFBx9ODu0f43daDc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={styles.background}>
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  );
}
