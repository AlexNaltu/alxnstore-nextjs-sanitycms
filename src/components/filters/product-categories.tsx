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
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { Separator } from "../ui/separator";

export default function ProductCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const router = useRouter();
  const setFilter = (category: string) => {
    if (category) {
      router.push("?category=" + category);
    }
    if (!category) {
      router.push("/products");
    }
  };

  const handleCheckboxChange = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setFilter("");
    } else {
      setSelectedCategory(category);
      setFilter(category);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <h1 className="text-2xl min-[1100px]:text-3xl">Categories:</h1>
        <div className="flex items-center space-x-2">
          <label
            htmlFor="all"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            All
          </label>
          <Checkbox
            id="all"
            checked={selectedCategory === ""}
            onCheckedChange={() => handleCheckboxChange("")}
          />
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <label
            htmlFor="tshirts"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            T-Shirts
          </label>
          <Checkbox
            id="tshirts"
            checked={selectedCategory === "T-shirts"}
            onCheckedChange={() => handleCheckboxChange("T-shirts")}
          />
        </div>
        <Separator />

        <div className="flex items-center space-x-2">
          <label
            htmlFor="hoodies"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Hoodies
          </label>
          <Checkbox
            id="hoodies"
            checked={selectedCategory === "Hoodies"}
            onCheckedChange={() => handleCheckboxChange("Hoodies")}
          />
        </div>
        <Separator />

        <div className="flex items-center space-x-2">
          <label
            htmlFor="sweatshirts"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Sweatshirts
          </label>
          <Checkbox
            id="sweatshirts"
            checked={selectedCategory === "Sweatshirts"}
            onCheckedChange={() => handleCheckboxChange("Sweatshirts")}
          />
        </div>
      </div>
    </div>
  );
}
