import type { Metadata } from "next";
import { proximaNova } from "./fonts/fonts";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { createMetadata } from "@/components/GetMetaData";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const generateMetadata = createMetadata("Homepage", true);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${proximaNova.variable} ${quicksand.variable}`}
    >
      <body className="min-h-full bg-white overflow-x-hidden">

        {children}



      </body>
    </html>
  );
}
