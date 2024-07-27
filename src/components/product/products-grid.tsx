"use client";

import { getAllProducts } from "@/actions/actions";
import { Category, IProduct } from "@/types/product-types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import ProductCard from "./product-card";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PageClickData {
  selectedPage: number;
  selected: number;
}

const ProductsGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // Get search parameters from the URL
  const params = useSearchParams();
  // Extract the 'category' parameter from the URL, if it exists
  const category = params.get("category") as Category | null;
  // Fetch all products using react-query
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getAllProducts();
      if (products.error) throw new Error(products.error);
      if (products.success) return products.success;
    },
  });
  // Memoize the filtered products list based on the selected category
  const filtered = useMemo(() => {
    if (category && data) {
      return data.filter((product: IProduct) =>
        product.category.includes(category)
      );
    }
    return data;
  }, [data, category]);

  // Handle page click event
  const handlePageClick = (selectedPage: PageClickData) => {
    setCurrentPage(selectedPage.selected);
  };

  const itemsPerPage = 20;
  const offset = currentPage * itemsPerPage;

  // Paginate the filtered products list
  const paginatedData = filtered.slice(offset, offset + itemsPerPage);

  if (error) return <div>{error.message}</div>;
  if (filtered && data)
    return (
      <div>
        <div className="grid grid-cols-2 mb-2 mt-7 gap-2 min-[470px]:grid-cols-3 min-[950px]:grid-cols-4">
          {paginatedData.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <ReactPaginate
          pageCount={Math.ceil(paginatedData.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          nextLabel={<MdKeyboardArrowRight size={25} />}
          previousLabel={<MdKeyboardArrowLeft size={25} />}
          breakLabel={"..."}
        />
      </div>
    );
};

export default ProductsGrid;
