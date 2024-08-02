"use client";

import { IProduct, StateProps } from "@/types/product-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";
import { Button } from "../ui/button";
import { formatPriceInEUR } from "@/lib/formatPrice";
import CartItem from "./cart-item";
import dynamic from "next/dynamic";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { ImCart } from "react-icons/im";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const [totalAmt, setTotalAmt] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );

    const stripe = await stripePromise;

    // Call backend to create a checkout session
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: productData }),
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

  return (
    <>
      <CartItem />
      <div className="tracking-tighter px-2 my-5">
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
            onClick={handleCheckout}
            className="rounded-none bg-black w-full text-white"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
