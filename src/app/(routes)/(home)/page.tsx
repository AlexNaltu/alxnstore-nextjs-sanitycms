import CodeBanner from "@/components/banner/code-banner";
import HeroCarousel from "@/components/carousel/hero-carousel";
import { categoryItems } from "@/lib/constants";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/newsletter/newsletter";
import {
  getFeaturedPlaylists,
  getNewArrivalsPlaylists,
  getRandomProducts,
} from "@/actions/actions";
import { IPlaylist, IProduct } from "@/types/product-types";
import FeaturedCarousel from "@/components/carousel/featured-products-carousel";
import RandomProductsCarousel from "@/components/carousel/random-product-carousel";

export const revalidate = 1000;

export default async function Home() {
  const featuredProducts = await getFeaturedPlaylists();
  const newArrivalsProducts = await getNewArrivalsPlaylists();
  const randomProducts = await getRandomProducts();

  return (
    <div className="max-w-[1400px] mx-auto">
      <HeroCarousel />
      <h1 className="font-black uppercase text-xs tracking-tighter bg-primary py-2 px-1 text-white w-fit sm:text-base lg:text-xl lg:px-3">
        Free shipping for orders over 80$
      </h1>
      <div className="grid grid-cols-2 gap-2 my-3 min-[470px]:grid-cols-3 sm:grid-cols-4 w-full">
        {categoryItems.map((category) => (
          <Link href={category.href} key={category.href}>
            <Image
              src={category.image}
              alt={category.href}
              width={350}
              height={300}
              className="min-[1300px]:aspect-video object-cover object-center"
            />
          </Link>
        ))}
      </div>

      <div className="my-3">
        {featuredProducts.map((item: IPlaylist) => (
          <section key={item._id}>
            <h1 className="uppercase mb-4 font-bold tracking-tighter px-1 min-[470px]:text-xl sm:text-2xl lg:text-3xl">
              {item.title}
            </h1>
            <FeaturedCarousel products={item.products} />
          </section>
        ))}
      </div>
      <CodeBanner />
      <div className="my-3">
        {newArrivalsProducts.map((item: IPlaylist) => (
          <section key={item._id}>
            <h1 className="uppercase mb-4 font-bold tracking-tighter px-1 min-[470px]:text-xl sm:text-2xl lg:text-3xl">
              {item.title}
            </h1>
            <FeaturedCarousel products={item.products} />
          </section>
        ))}
      </div>
      <div className="bg-black text-white sm:flex">
        <div className="pt-4 pb-1 px-3">
          <h1 className="text-2xl min-[470px]:text-3xl">
            Custom Design Solutions
          </h1>
          <h4 className="text-lg text-secondary min-[470px]:text-xl">
            You dream it, we design it
          </h4>
          <p className="text-xs">
            Do you want a custom t-shirt/hoodie/sweatshirts design? Contact us !
          </p>
          <Link
            href={"/products"}
            className="flex gap-1 items-center mt-3 hover:text-secondary transition-all duration-300 ease-linear min-[470px]:text-lg"
          >
            Contact Us <MdOutlineArrowRightAlt size={40} />
          </Link>
        </div>
        <div className="lg:flex">
          <Image
            src="/design-img.png"
            alt="banner"
            width={500}
            height={500}
            className="pl-3 min-[470px]:aspect-video object-cover object-top sm:max-w-[350px]"
          />
          <Image
            src="/design-img.png"
            alt="banner"
            width={500}
            height={500}
            className="hidden lg:inline-flex aspect-video object-cover object-top max-w-[350px] pl-3"
          />
        </div>
      </div>
      <div className="py-3 bg-black">
        {randomProducts.map((item: IPlaylist) => (
          <section key={item._id}>
            <h1 className="uppercase mb-4 font-bold tracking-tighter px-1 min-[470px]:text-xl sm:text-2xl">
              {item.title}
            </h1>
            <RandomProductsCarousel products={item.products} />
          </section>
        ))}
      </div>
      <Newsletter />
    </div>
  );
}
