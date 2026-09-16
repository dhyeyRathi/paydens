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
      <body className="min-h-full  overflow-x-hidden flex flex-col pt-[160px] sm:pt-[150px] md:pt-[200px] lg:pt-[250px] bg-white ">
        <Navbar />
        {children}
        <Footer /></body>
    </html>
  );
}
