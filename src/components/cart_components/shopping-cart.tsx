"use client";

import { IProduct, StateProps } from "@/types/product-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";
import Image from "next/image";
import { Button } from "../ui/button";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const [totalAmt, setTotalAmt] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
      <div>
        <div>
          <h1>
            Your Cart &#40;
            {productData.length === 1 || productData.length === 0
              ? `Item (${productData.length})`
              : `Items (${productData.length})`}
            &#41;
          </h1>

          <div className="flex items-center gap-3">
            <Image
              src="/delivery-icon.png"
              alt="delivery"
              width={50}
              height={50}
            />
            <h3 className="font-sans font-semibold">
              Est. Delivery Time: 5-10 Days
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
