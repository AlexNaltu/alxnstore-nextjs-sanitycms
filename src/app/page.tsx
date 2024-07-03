import CodeBanner from "@/components/banner/code-banner";
import HeroCarousel from "@/components/carousel/hero-carousel";
import TopCarousel from "@/components/carousel/top-carousel";
import Navbar from "@/components/navbar/navbar";
import { categoryItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <TopCarousel />
      <Navbar />
      <HeroCarousel />
      <h1 className="font-black uppercase text-xs tracking-tighter bg-primary py-2 px-1 text-white w-fit">
        Free shipping for orders over 80$
      </h1>
      <div className="grid grid-cols-2 gap-2 my-3">
        {categoryItems.map((category) => (
          <Link href={category.href} key={category.href}>
            <Image
              src={category.image}
              alt={category.href}
              width={300}
              height={300}
            />
          </Link>
        ))}
      </div>
      <h2 className="uppercase mb-4 font-bold tracking-tighter px-1">
        Featured Products
      </h2>
      <CodeBanner />
      <h2 className="uppercase my-4 font-bold tracking-tighter px-1">
        New Arrivals
      </h2>
    </div>
  );
}
