import CartQuestionsAccordion from "@/components/accordions/cart-questions-accordion";
import ShoppingCart from "@/components/cart_components/shopping-cart";
import { payments } from "@/lib/constants";
import Image from "next/image";
import { FaLock, FaCheck } from "react-icons/fa";

const CartPage = () => {
  return (
    <div>
      <ShoppingCart />
      <div className="flex flex-col px-1 gap-2 sm:flex-row max-w-[1000px] mx-auto sm:mt-10 ">
        <div className="bg-white text-black w-full h-[6rem] font-sans font-medium px-2 rounded-lg">
          <h1>Our Advantages</h1>
          <div className="text-xs flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-600" />
              <p>Fast Shipping</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLock size={20} className="text-green-600" />
              <p>Shop safely - Certified online shop</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-[6rem] flex flex-col gap-3 px-2 rounded-lg">
          <h1 className="font-sans font-medium">Payment Methods</h1>
          <div className="flex items-center gap-2 ">
            {payments.map((payment, i) => (
              <Image
                key={i}
                src={payment.image}
                alt=""
                width={1000}
                height={1000}
                className="max-w-[60px]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto text-white px-1">
        <CartQuestionsAccordion />
      </div>
    </div>
  );
};

export default CartPage;
