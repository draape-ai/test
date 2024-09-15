import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], fallback: ['Arial', 'sans-serif'] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DraapeAI",
  description: "Clothes should fit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
