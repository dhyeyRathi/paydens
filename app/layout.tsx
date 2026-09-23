import type { Metadata } from "next";
import { proximaNova } from "./fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Quicksand } from "next/font/google";
import Footer from "@/components/Footer";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Paydens",
  description: "pharmacy",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${proximaNova.variable} ${quicksand.variable}`}
    >
      <body className="min-h-full  overflow-x-hidden flex flex-col items-center justify-center  pt-[120px] md:pt-[140px] lg:pt-[200px]  bg-white ">
        <Navbar />
        <div className="w-full !overflow-visible xl:max-w-[1440px]">
          {children}
        </div>

        <Footer /></body>
    </html>
  );
}
