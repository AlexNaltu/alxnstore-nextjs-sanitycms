import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "size",
              title: "Size",
              type: "string",
              options: {
                list: ["S", "M", "L", "XL", "XXL", "XXXL"],
              },
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
            }),
            defineField({
              name: "variant_id",
              title: "Variant ID",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: ["T-shirts", "Hoodies", "Sweatshirts"],
          },
        },
      ],
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "colors" }],
        },
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "created_at",
      title: "Created At",
      type: "datetime",
    }),
  ],
});
