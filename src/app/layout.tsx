import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "GoITeens",
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
