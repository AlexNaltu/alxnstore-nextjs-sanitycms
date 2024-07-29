"use client";

import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function ProductCategories() {
  const router = useRouter();
  const setFilter = (category: string) => {
    if (category) {
      router.push("?category=" + category);
    }
    if (!category) {
      router.push("/products");
    }
  };

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg sm:text-xl md:text-2xl">
              Categories
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col">
              <Button
                onClick={() => setFilter("")}
                className="bg-transparent border-0 border-transparent"
              >
                All
              </Button>
              <Button
                onClick={() => setFilter("T-shirts")}
                className="bg-transparent border-0 border-transparent"
              >
                T-Shirts
              </Button>
              <Button
                onClick={() => setFilter("Hoodies")}
                className="bg-transparent border-0 border-transparent"
              >
                Hoodies
              </Button>
              <Button
                onClick={() => setFilter("Sweatshirts")}
                className="bg-transparent border-0 border-transparent"
              >
                Sweatshirts
              </Button>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
