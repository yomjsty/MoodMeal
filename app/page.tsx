import PageBackground from "@/components/PageBackground";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <PageBackground />
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 text-white max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl text-balance">
          Find the Perfect Food for Your{" "}
          <span className="px-4 relative inline-block">
            <span aria-hidden="true" className="absolute inset-0 -rotate-2 bg-[#799122]"></span>
            <span className="relative z-10">Mood</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Temukan makanan yang pas dengan suasana hati kamu
        </p>
        <div className="">
          <Button
            size="lg"
            className="bg-[#799122] hover:bg-[#799122]/90 text-white px-8 py-6 text-lg animate-pulse"
            asChild
          >
            <Link href="/findyourfood">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
