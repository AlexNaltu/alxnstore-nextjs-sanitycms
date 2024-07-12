import { defineField, defineType } from "sanity";

export default defineType({
  name: "newArrivalsPlaylist",
  title: "New Arrivals Playlist",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    }),
  ],
});
