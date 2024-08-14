import { defineType } from "sanity";

export default defineType({
  name: "colors",
  type: "document",
  title: "Color",
  fields: [
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "colorId",
      title: "color id",
      type: "string",
    },
  ],
});
