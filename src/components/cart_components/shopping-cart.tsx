"use client";

import { IProduct, StateProps } from "@/types/product-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";
import { Button } from "../ui/button";
import { formatPriceInEUR } from "@/lib/formatPrice";
import CartItem from "./cart-item";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import CartInfo from "./cart-info";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const [totalAmt, setTotalAmt] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const router = useRouter();

  const { isSignedIn } = useAuth();

  const shippingCost = totalQuantity > 1 ? 5 + (totalQuantity - 1) : 5;

  // Calculate total amount and quantity
  useEffect(() => {
    let amt: number = 0;
    productData.map((item: IProduct) => {
      amt += Number(item.price) * item.quantity;
    });

    setTotalAmt(amt);

    const calculateTotalQuantity = () => {
      let quantity: number = 0;
      productData.map((item: IProduct) => {
        quantity += item.quantity;
      });
      setTotalQuantity(quantity);
    };

    calculateTotalQuantity();
  }, [productData]);

  // Handle checkout
  const handleCheckout = async () => {
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
    );

    const stripe = await stripePromise;

    // Call backend to create a checkout session
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // @ts-ignore
      body: JSON.stringify({ items: productData, shipping: shippingCost }),
    });

    const data = await response.json();

    // Redirect to checkout page
    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(saveOrder({ order: productData, id: data.id }));
    } else {
      throw new Error("Something went wrong");
    }
  };

  const handleClick = () => {
    if (productData.length === 0) {
      toast.error("Your Cart is Empty");
      return;
    }

    if (isSignedIn) {
      handleCheckout();
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <CartInfo />
        <div className="md:flex justify-between">
          <CartItem />
          <div className="tracking-tighter px-1 sm:px-3 my-5 text-white w-full md:max-w-[300px] lg:max-w-[400px]">
            <div className="flex flex-col gap-2">
              <div>
                <div className="flex justify-between">
                  <h2>Total Items:</h2>
                  <p>{totalQuantity}</p>
                </div>
                <div className="flex justify-between border-b-2 border-slate-300 pb-2">
                  <h2>Shipping:</h2>
                  <p>{formatPriceInEUR(shippingCost)}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <h2>Total Price:</h2>
                <p>{formatPriceInEUR(totalAmt)}</p>
              </div>
              <Button
                onClick={handleClick}
                className="rounded-none bg-black w-full text-white hover:bg-gray-900 transition-all ease-in-out duration-300"
              >
                Checkout
              </Button>
            </div>
            <Toaster position="top-center" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
