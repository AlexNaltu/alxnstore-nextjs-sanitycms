import CartItem from "@/components/cart_components/cart-item";
import dynamic from "next/dynamic";
import React from "react";

const NoSSR = dynamic(
  () => import("@/components/cart_components/shopping-cart"),
  { ssr: false }
);

const CartSSR = dynamic(
  () => import("@/components/cart_components/cart-item"),
  { ssr: false }
);

const CartPage = () => {
  return (
    <div>
      <CartSSR />
      <NoSSR />
    </div>
  );
};

export default CartPage;
