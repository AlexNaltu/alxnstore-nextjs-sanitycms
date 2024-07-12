"use client";

import { getAllProducts } from "@/actions/actions";
import { IProduct } from "@/types/product-types";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const itemsPerPage = 2;
const data = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

interface PageClickData {
  selectedPage: number;
  selected: number;
}

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handlePageClick = (selectedPage: PageClickData) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedData = products.slice(offset, offset + itemsPerPage);
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        {paginatedData.map((item, i) => (
          <div key={i}>{item.name}</div>
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(data.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Products;
