import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const CartQuestionsAccordion = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="decoration-0 text-base min-[470px]:text-lg sm:text-xl md:text-2xl">
            Shipping
          </AccordionTrigger>
          <AccordionContent>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  Do you ship internationally?
                </h1>
                <p className="text-slate-200">
                  We ship to all European countries. The shipping cost is based
                  on the first item plus any additional items and can be viewed
                  in your cart or on the checkout page.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  When will my order arrive?
                </h1>
                <p className="text-slate-200">
                  Delivery times depend on your location and the shipping method
                  chosen. Standard shipping usually takes 3-10 business days.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  How much does shipping cost?
                </h1>
                <p className="text-slate-200">
                  Shipping cost is calculated on the cart page or during
                  checkout, but usually, it costs 5€ for the first item and 1€
                  for each additional item
                </p>
              </div>
            </section>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="">
          <AccordionTrigger className="decoration-0 text-base min-[470px]:text-lg sm:text-xl md:text-2xl">
            Payment
          </AccordionTrigger>
          <AccordionContent>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  What payment methods do you accept?
                </h1>
                <p className="text-slate-200">
                  We accept major credit cards &#40; Visa, MasterCard &#41; ,
                  PayPal, and Revolut Pay as payment methods.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  Is it safe to use my credit card on your website?
                </h1>
                <p className="text-slate-200">
                  We use Stripe for payment processing, which is highly secure.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  What should I do if my payment is declined?
                </h1>
                <p className="text-slate-200">
                  Please check with your bank or credit card provider for any
                  issues with your card. You can also try using a different
                  payment method.
                </p>
              </div>
            </section>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="">
          <AccordionTrigger className="decoration-0 text-base min-[470px]:text-lg sm:text-xl md:text-2xl">
            Returns and Exchanges
          </AccordionTrigger>
          <AccordionContent>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  What is your return policy?
                </h1>
                <p className="text-slate-200">
                  We accept returns within 14 days of purchase. Items must be in
                  their original condition and packaging.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">How do I return an item?</h1>
                <p className="text-slate-200">
                  To return an item, please contact our customer service team
                  for instructions.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  Are return shipping costs covered?
                </h1>
                <p className="text-slate-200">
                  Return shipping costs are the responsibility of the customer,
                  unless the return is due to a mistake on our part.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">Can I exchange an item?</h1>
                <p className="text-slate-200">
                  No, exchanges are not accepted. We only accept returns if the
                  item is in its original condition. Please contact us to
                  arrange a return.
                </p>
              </div>
            </section>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="">
          <AccordionTrigger className="decoration-0 text-base min-[470px]:text-lg sm:text-xl md:text-2xl">
            Account
          </AccordionTrigger>
          <AccordionContent>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  Do I need an account to place an order?
                </h1>
                <p className="text-slate-200">
                  Yes, creating an account is required to make a purchase. It
                  ensures that we can quickly assist you with any issues and
                  makes future purchases faster and easier.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  How do I reset my password?
                </h1>
                <p className="text-slate-200">
                  Click on the “Forgot Password” link on the login page and
                  follow the instructions to reset your password.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-lg">
                  How can I contact customer service?
                </h1>
                <p className="text-slate-200">
                  You can reach our customer service team via email or phone.
                  For further details, please visit our Contact Us page.
                </p>
              </div>
            </section>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CartQuestionsAccordion;
