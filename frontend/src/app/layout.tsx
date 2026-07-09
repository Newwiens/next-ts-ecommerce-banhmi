import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Ba Mi Vietnam",
  description: "Vietnamese bánh mì website",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
