import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

export const getFeaturedPlaylists = async () => {
  try {
    const playlist =
      await client.fetch(groq`*[_type == "featuredPlaylist"] | order(_id desc) {
            _id,
            title,
            products[]->{
              _id,
              name,
              images,
              description,
              "thumbnail": thumbnail.asset->url,
              "sizes": sizes[]{
              size,
              price,
              colors,
              _key
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
              images,
              description,
              "thumbnail": thumbnail.asset->url,
              "sizes": sizes[]{
              size,
              price,
              colors,
              _key
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
              images,
              description,
              "thumbnail": thumbnail.asset->url,
              "sizes": sizes[]{
              size,
              price,
              colors,
              _key
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
       images,
       description,
       "thumbnail": thumbnail.asset->url,
       "sizes": sizes[]{
         size,
         price,
         colors,
         _key
       }
    }`);

    return products;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
