import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  cheatSheet,
}: Readonly<{
  children: React.ReactNode;
  cheatSheet: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-800 text-slate-100">
      <body className={inter.className + "flex flex-col"}>
        {children}
        {/* cheatSheet */}
      </body>
    </html>
  );
}
