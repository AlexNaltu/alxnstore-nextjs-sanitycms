"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { getAllProducts } from "@/actions/actions";
import { IProduct } from "@/types/product-types";
import Fuse from "fuse.js";
import SearchResults from "./search-results";
import { useClickAway } from "@uidotdev/usehooks";

const Searchbar = () => {
  // products state to store all products
  const [products, setProducts] = useState<IProduct[]>([]);
  // queryText state to store the search query
  const [queryText, setQueryText] = useState("");
  // searchResults state to store the search results
  const [searchResults, setSearchResults] = useState<IProduct[] | undefined>(
    products
  );

  const ref = useClickAway(() => {
    setSearchResults([]);
  }) as React.MutableRefObject<HTMLDivElement>;
  // fetch all products
  useEffect(() => {
    const fetchedProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    };

    fetchedProducts();
  }, []);

  // search products based on the query text with Fuse.js
  useEffect(() => {
    if (!queryText) {
      setSearchResults([]);
      return;
    }

    const fuse = new Fuse(products || [], {
      keys: ["name", "description"],
      includeScore: true,
    });

    const result = fuse.search(queryText);
    console.log(result);

    const transformedResults = result.map((r) => r.item);
    setSearchResults(transformedResults);
  }, [queryText, products]);

  // handle the change of the input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryText(e.target.value);
  };

  return (
    <div className="relative" ref={ref}>
      <Input
        placeholder="Search Products..."
        className="rounded-none w-full lg:min-w-[500px] border-primary border-2"
        value={queryText}
        onChange={handleChange}
        type="text"
      />
      {queryText && (
        <div className="absolute z-10 left-0 right-0 bg-white border-x-2 border-b-2 border-t-0 border-primary">
          {searchResults?.map((result) => (
            <SearchResults key={result._id} result={result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
