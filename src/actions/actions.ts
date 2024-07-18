import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { IProduct } from "@/types/product-types";

interface SlugProps {
  slug: string;
}

interface CategoryProps {
  category: string;
}

export const getFeaturedPlaylists = async () => {
  try {
    const playlist =
      await client.fetch(groq`*[_type == "featuredPlaylist"] | order(_id desc) {
            _id,
            title,
            products[]->{
              _id,
              name,
              "slug": slug.current,
              images,
              description,
              "thumbnail": thumbnail.asset->url,
              "sizes": sizes[]{
              size,
              price,
              colors,
              _key,

              }
            }
            }`);

    return playlist;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getNewArrivalsPlaylists = async () => {
  try {
    const playlist =
      await client.fetch(groq`*[_type == "newArrivalsPlaylist"] | order(_id desc) {
            _id,
            title,
            products[]->{
              _id,
              name,
              "slug": slug.current,
              images,
              description,
              "thumbnail": thumbnail.asset->url,
              "sizes": sizes[]{
              size,
              price,
              colors,
              _key,
              }
            }
            }`);

    return playlist;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRandomProducts = async () => {
  try {
    const playlist =
      await client.fetch(groq`*[_type == "randomProductsPlaylist"] | order(_id desc) {
            _id,
            title,
            products[]->{
              _id,
              name,
              "slug": slug.current,
              images,
              description,
              "thumbnail": thumbnail.asset->url,
              "sizes": sizes[]{
              size,
              price,
              colors,
              _key,
              }
            }
            }`);

    return playlist;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async () => {
  try {
    const products = await client.fetch(groq`*[_type == "product"] {
       _id,
       name,
      "slug": slug.current,
       images,
       description,
       "thumbnail": thumbnail.asset->url,
       "sizes": sizes[]{
         size,
         price,
         colors,
         _key,

       }
    }`);

    return products;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProductBySlug = async ({ slug }: SlugProps) => {
  try {
    const product: IProduct = await client.fetch(
      groq`*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
      name,
      "images": images[].asset->url,
      description,
      category,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "sizes": sizes[]{
        size, 
        price,
        colors,
        _key,  
      }
    }`
    );

    return product;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRelatedProducts = async (category: string) => {
  try {
    const product: IProduct[] = await client.fetch(
      groq`*[_type == "product" && category == "${category}"][0...8] {
       _id,
       name,
       "images": images[].asset->url,
       description,
       category,
       "slug": slug.current,
       "thumbnail": thumbnail.asset->url,
       "sizes": sizes[]{
         size, 
         price,
         colors,
         _key,  
       }
      }`
    );

    return product;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
