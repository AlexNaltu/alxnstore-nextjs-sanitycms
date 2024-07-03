import HeroCarousel from "@/components/carousel/hero-carousel";
import TopCarousel from "@/components/carousel/top-carousel";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <TopCarousel />
      <Navbar />
      <HeroCarousel />
      <h1 className="font-black uppercase text-xs tracking-tighter bg-primary py-2 px-1 text-white w-fit">
        Free shipping for orders over 80$
      </h1>
    </div>
  );
}
