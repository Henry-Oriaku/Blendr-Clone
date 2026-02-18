import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutClient from "./layoutClient";

export const metadata: Metadata = {
  title: "Blendr Clone - By Henry Oriaku",
  description: "Blendr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <LayoutClient>
      {children}
    </LayoutClient>
  );
}
