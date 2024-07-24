"use client";
import { IProduct, StateProps } from "@/types/product-types";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  updateQuantity,
} from "@/redux/shoppingSlice";
import { IoIosTrash } from "react-icons/io";
import { Input } from "../ui/input";

const CartItem = () => {
  const { productData } = useSelector((state: StateProps) => state.shopping);

  const dispatch = useDispatch();

  const handleQuantityChange = (id: string, size: string, quantity: number) => {
    // Convert quantity to string, remove leading zeros, and ensure quantity is a valid number
    const sanitizedQuantity = quantity.toString().replace(/^0+/, "") || "0";
    dispatch(updateQuantity({ id, size, quantity: Number(sanitizedQuantity) }));
  };

  return (
    <>
      <div className="tracking-tighter">
        <h1 className="font-black">
          {productData.length === 0 ? (
            "Your cart is empty"
          ) : (
            <>
              Your Cart &#40;
              {productData.length === 1
                ? `Item ${productData.length}`
                : `Items ${productData.length}`}
              &#41;
            </>
          )}
        </h1>

        <div className="flex items-center gap-3">
          <Image
            src="/delivery-icon.png"
            alt="delivery"
            width={50}
            height={50}
          />
          <h3 className="font-sans font-semibold text-sm">
            Est. Delivery Time: 5-10 Days
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full my-3">
        {productData.map((item: IProduct) => (
          <div key={item._id} className="flex font-sans text-slate-500 ">
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={1000}
              height={1000}
              className="px-2 max-w-[40%] aspect-square object-contain"
            />
            <div className="text-xs">
              <div className="flex items-center gap-2 ">
                <h1 className="font-bold uppercase line-clamp-1">
                  {item.name}
                </h1>
                <IoIosTrash
                  onClick={() => dispatch(deleteProduct(item.size))}
                  className="text-xl text-black cursor-pointer"
                  size={30}
                />
              </div>
              <p>Color: {item.color}</p>
              <p>Size: Xl</p>
              <p></p>
              <div className="flex gap-3">
                <h2>Quantity:</h2>
                <Input
                  type="number"
                  value={item.quantity}
                  className="w-10"
                  onChange={(e) => {
                    handleQuantityChange(
                      item._id,
                      item.size,
                      Number(e.target.value)
                    );
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
