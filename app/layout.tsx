import type { Metadata } from "next";
import { proximaNova } from "./fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Quicksand } from "next/font/google";
import Footer from "@/components/Footer";
import SmoothScrollToTop from "@/components/ScrollToTop";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Paydens",
  description: "pharmacy",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${proximaNova.variable} ${quicksand.variable}`}
    >
      <body className="min-h-full  overflow-x-hidden flex flex-col items-center justify-center 
       pt-[100px] min-[480px]:!pt-[100px] min-[769px]:!pt-[180px] lg:!pt-[200px] xl:!pt-[240px]  bg-white ">
        <Navbar />
        <SmoothScrollToTop />
        <div className="w-full !overflow-visible xl:max-w-[1440px]">
          {children}
        </div>

        <Footer /></body>
    </html>
  );
}
