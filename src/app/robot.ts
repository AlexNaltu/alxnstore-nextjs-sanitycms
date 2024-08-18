import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://alxnstore.shop";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/products"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
