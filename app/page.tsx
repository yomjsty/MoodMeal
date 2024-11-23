import PageBackground from "@/components/PageBackground";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/landingpage-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div> */}
      <PageBackground />
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 text-white max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl text-balance">
          Find the Perfect Food for Your{" "}
          <span className="px-4 relative">
            <span aria-hidden="true" className="absolute inset-0 -rotate-2 bg-[#799122]"></span>
            <span className="isolate">Mood</span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Temukan makanan yang pas dengan suasana hati kamu
        </p>
        <div className="">
          <Button
            size="lg"
            className="bg-[#799122] hover:bg-[#799122]/90 text-white px-8 py-6 text-lg animate-pulse"
          >
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}
