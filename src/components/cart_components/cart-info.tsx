"use client";
import { StateProps } from "@/types/product-types";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { resetCart } from "@/redux/shoppingSlice";
import dynamic from "next/dynamic";

const CartInfo = () => {
  const { productData } = useSelector((state: StateProps) => state.shopping);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col min-[470px]:flex-row justify-between px-1 sm:px-3 mt-4 lg:mt-8">
      <div className="tracking-tighter  text-white">
        <h1 className="font-black text-base md:text-lg lg:text-xl">
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

        <div className="flex items-center gap-3 ">
          <Image
            src="/delivery-icon.png"
            alt="delivery"
            width={50}
            height={50}
          />
          <h3 className="font-sans font-semibold text-sm  sm:text-base">
            Est. Delivery Time: 3-10 Days
          </h3>
        </div>
      </div>
      <div className="self-end">
        {productData.length === 0 ? (
          <div></div>
        ) : (
          <Button
            className="bg-transparent text-white self-end underline p-0 min-[470px]:text-lg hover:text-red-500 transition-all ease-in-out duration-300"
            onClick={() => dispatch(resetCart())}
          >
            Clear Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CartInfo), { ssr: false });
