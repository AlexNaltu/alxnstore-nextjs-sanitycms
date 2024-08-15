"use client";
import { IProduct, StateProps } from "@/types/product-types";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoTrash } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import {
  deleteProduct,
  resetCart,
  updateQuantity,
} from "@/redux/shoppingSlice";
import { Input } from "../ui/input";
import { formatPriceInEUR } from "@/lib/formatPrice";
import dynamic from "next/dynamic";
import toast, { Toaster } from "react-hot-toast";

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
      <div className="px-1 flex flex-col sm:px-3">
        <div className="flex flex-col gap-8 w-full my-3">
          {productData.map((item: IProduct) => (
            <div
              key={`${item._id}-${item.size}-${item.color_}-${item.quantity}`}
              className="flex font-sans text-slate-500 gap-1 "
            >
              <Image
                src={item.thumbnail}
                alt={item.name}
                width={1000}
                height={1000}
                className="max-w-[45%] min-[470px]:max-w-[200px] aspect-square object-contain self-start"
              />
              <div className="text-xs flex flex-col gap-1 text-white">
                <div className="flex items-center gap-10 ">
                  <h1 className="font-bold uppercase line-clamp-2 lg:text-lg">
                    {item.name}
                  </h1>
                  <GoTrash
                    onClick={() =>
                      dispatch(deleteProduct(item.size && item.color_Id)) &&
                      toast.error("Item removed from cart")
                    }
                    className="text-xl text-white cursor-pointer hover:text-red-500 transition-all ease-in-out duration-300 w-fit"
                    size={25}
                  />
                </div>
                <p>Color: {item.color_}</p>
                <p>Size: {item.size}</p>

                <div className="flex gap-3">
                  <Input
                    type="tel"
                    max={99}
                    value={item.quantity}
                    className="w-20 rounded-none border-2 border-black text-black"
                    onChange={(e) => {
                      handleQuantityChange(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      );
                    }}
                  />
                </div>
                <p className="font-black text-white">
                  {formatPriceInEUR(Number(item.price))}
                </p>
                <div className="flex items-center gap-2">
                  <CiHeart size={20} />
                  <p>Add to Wishlist</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Toaster position="top-center" />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CartItem), { ssr: false });
