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
import BoxReveal from "@/components/magicui/box-reveal";

export const revalidate = 1000;

export default async function Home() {
  const featuredProducts = await getFeaturedPlaylists();
  const newArrivalsProducts = await getNewArrivalsPlaylists();
  const randomProducts = await getRandomProducts();

  return (
    <>
      <div className="max-w-[1600px] mx-auto px-1">
        <div className="lg:flex">
          <HeroCarousel />

          <div className="grid grid-cols-2 gap-2 my-3 min-[470px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 w-full">
            {categoryItems.map((category) => (
              <Link href={category.href} key={category.href}>
                <Image
                  src={category.image}
                  alt={category.href}
                  width={650}
                  height={650}
                  className="min-[1024px]:aspect-video object-cover object-center"
                />
              </Link>
            ))}
          </div>
        </div>
        <BoxReveal boxColor="#000000">
          <h1 className=" uppercase  tracking-tighter  py-2 text-white w-fit text-[17px] lg:text-2xl">
            Free shipping for orders over 80$
          </h1>
        </BoxReveal>
        <div className="my-3 sm:my-6 lg:my-10">
          {featuredProducts.map((item: IPlaylist) => (
            <section key={item._id}>
              <h1 className="uppercase mb-4 font-bold tracking-tighter text-2xl lg:text-3xl text-white">
                {item.title}
              </h1>
              <FeaturedCarousel products={item.products} />
            </section>
          ))}
        </div>
        <CodeBanner />
        <div className="my-3 sm:my-6 lg:my-10">
          {newArrivalsProducts.map((item: IPlaylist) => (
            <section key={item._id}>
              <h1 className="uppercase mb-4 font-bold tracking-tighter text-2xl lg:text-3xl text-white">
                {item.title}
              </h1>
              <FeaturedCarousel products={item.products} />
            </section>
          ))}
        </div>
      </div>
      <div className="bg-black text-white px-1">
        <div className="max-w-[1600px]  sm:flex justify-between mx-auto">
          <div className="pt-4 pb-1 ">
            <h1 className="text-3xl min-[470px]:text-4xl lg:text-5xl">
              Custom Design
            </h1>
            <h4 className="text-lg bg-gradient-to-r from-slate-500 to-black min-[470px]:text-xl lg:text-2xl">
              You dream it, we design it
            </h4>
            <p className="text-xs lg:text-sm">
              Do you want a custom t-shirt/hoodie/sweatshirt design? Contact us
              !
            </p>
            <Link
              href={"/contact-us"}
              className="flex gap-1 items-center mt-3 hover:text-slate-400 transition-all duration-300 ease-linear min-[470px]:text-lg lg:text-xl"
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
              className="aspect-video object-cover object-top sm:max-w-[300px] md:pt-7"
            />
          </div>
        </div>
      </div>
      <div className="py-3 lg:py-6 lg:mb-10 bg-black">
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
    </>
  );
}
