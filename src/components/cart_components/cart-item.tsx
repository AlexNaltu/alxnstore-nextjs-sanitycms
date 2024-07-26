"use client";
import { IProduct, StateProps } from "@/types/product-types";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoTrash } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  updateQuantity,
} from "@/redux/shoppingSlice";
import { Input } from "../ui/input";
import { formatPriceInEUR } from "@/lib/formatPrice";

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
      <div className="tracking-tighter px-1">
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
          <div key={item._id} className="flex font-sans text-slate-500  ">
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={1000}
              height={1000}
              className="px-2 max-w-[45%] aspect-square object-contain"
            />
            <div className="text-xs flex flex-col gap-1">
              <div className="flex items-center gap-10 ">
                <h1 className="font-bold uppercase line-clamp-1 text-sm">
                  {item.name}
                </h1>
                <GoTrash
                  onClick={() => dispatch(deleteProduct(item.size))}
                  className="text-xl text-black cursor-pointer"
                  size={20}
                />
              </div>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>

              <div className="flex gap-3">
                <Input
                  type="tel"
                  max={99}
                  value={item.quantity}
                  className="w-20 rounded-none border-2 border-black"
                  onChange={(e) => {
                    handleQuantityChange(
                      item._id,
                      item.size,
                      Number(e.target.value)
                    );
                  }}
                />
              </div>
              <p className="font-black text-black">
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
    </>
  );
};

export default CartItem;
