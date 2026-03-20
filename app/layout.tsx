import type { Metadata } from "next";
import { Calistoga, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { siteContent } from "@/lib/site-content";

const calistoga = Calistoga({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:       siteContent.metadata.title,
  description: siteContent.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${calistoga.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
