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
              price,
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

    console.log(JSON.stringify(playlist, null, 2));

    return playlist;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
