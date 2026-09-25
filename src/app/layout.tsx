import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acens — Digital Agency",
  description:
    "Acens is a digital agency crafting brand strategy, web development, and social media experiences that turn ideas into brands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
