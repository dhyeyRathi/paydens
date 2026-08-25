import Features from "@/components/Homepage/Features";
import Hero from "@/components/Homepage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-15">
      <Hero />
      <Features />
    </div>
  );
}
