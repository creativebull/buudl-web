import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NATS = localFont({ src: "./NATS-Regular.ttf" });

export const metadata: Metadata = {
  title: "buudl",
  description: "Space for Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NATS.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
