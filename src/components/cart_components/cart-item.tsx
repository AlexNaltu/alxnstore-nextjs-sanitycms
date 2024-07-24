"use client";
import { IProduct, StateProps } from "@/types/product-types";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

const CartItem = () => {
  const { productData } = useSelector((state: StateProps) => state.shopping);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        {productData.map((item: IProduct) => (
          <div key={item._id}>
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={200}
              height={200}
            />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
