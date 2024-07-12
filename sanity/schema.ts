import { type SchemaTypeDefinition } from "sanity";
import featuredPlaylistsSchema from "./schemas/playlists/featured-playlists.schema";
import product from "./schemas/product";
import newArrivalsPlaylistSchema from "./schemas/playlists/new-arrivals-playlist.schema";
import randomProductsPlaylistSchema from "./schemas/playlists/random-products-playlist.schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    featuredPlaylistsSchema,
    product,
    newArrivalsPlaylistSchema,
    randomProductsPlaylistSchema,
  ],
};
