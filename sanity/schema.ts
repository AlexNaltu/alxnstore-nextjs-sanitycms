import { type SchemaTypeDefinition } from "sanity";
import featuredPlaylistsSchema from "./schemas/playlists/featured-playlists.schema";
import product from "./schemas/product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, featuredPlaylistsSchema],
};
