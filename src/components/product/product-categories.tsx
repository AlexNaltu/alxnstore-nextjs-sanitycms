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
            <NavigationMenuTrigger>Clothing</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Badge onClick={() => setFilter("")}>All</Badge>
              <Button onClick={() => setFilter("T-shirts")}>T-Shirts</Button>
              <Badge onClick={() => setFilter("Hoodies")}>Hoodies</Badge>
              <Badge onClick={() => setFilter("Sweatshirts")}>
                Sweatshirts
              </Badge>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
