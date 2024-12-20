import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MakeTiny - Make URL Tiny",
  description:
    "Shorten, Share, Simplify - Transform long links into concise, shareable URLs instantly and effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-purple-100 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
