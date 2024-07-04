import CodeBanner from "@/components/banner/code-banner";
import HeroCarousel from "@/components/carousel/hero-carousel";
import TopCarousel from "@/components/carousel/top-carousel";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { categoryItems } from "@/lib/constants";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/newsletter/newsletter";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <h1 className="font-black uppercase text-xs tracking-tighter bg-primary py-2 px-1 text-white w-fit">
        Free shipping for orders over 80$
      </h1>
      <div className="grid grid-cols-2 gap-2 my-3 min-[470px]:grid-cols-3">
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
      <h2 className="uppercase mb-4 font-bold tracking-tighter px-1 min-[470px]:text-xl">
        Featured Products
      </h2>
      <CodeBanner />
      <h2 className="uppercase my-4 font-bold tracking-tighter px-1 min-[470px]:text-xl">
        New Arrivals
      </h2>
      <div className="bg-primary text-white">
        <div className="pt-4 pb-1 px-3">
          <h1 className="text-2xl min-[470px]:text-3xl">
            Creative Visuals Hub
          </h1>
          <h4 className="text-lg text-secondary min-[470px]:text-xl">
            Innovative Design Solutions
          </h4>
          <p className="text-xs">
            Discover captivation designs that blend creativity and functionality
            seamlessly
          </p>
          <Link
            href={"/products"}
            className="flex gap-1 items-center mt-3 hover:text-secondary transition-all duration-300 ease-linear min-[470px]:text-lg"
          >
            Discover <MdOutlineArrowRightAlt size={40} />
          </Link>
        </div>
        <Image
          src="/design-img.png"
          alt="banner"
          width={1000}
          height={1000}
          className="pl-3 min-[470px]:aspect-video object-cover object-top"
        />
      </div>
      <Newsletter />
    </div>
  );
}
