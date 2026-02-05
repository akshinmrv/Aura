import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Noise } from "@/components/atomic/Noise";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AURA - Spatial Dashboard",
  description: "Next-gen aerial command center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-void text-slate-200`}
      >
        <Noise />
        {children}
      </body>
    </html>
  );
}
