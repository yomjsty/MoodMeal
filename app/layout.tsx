import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Rubik } from "next/font/google";
import { BackgroundProvider } from "@/app/contexts/BackgroundContext";

const rubik = Rubik({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MoodMeal",
  description: "Find the Perfect Food for Your Mood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <BackgroundProvider>
          <Navbar />
          {children}
        </BackgroundProvider>
      </body>
    </html>
  );
}
