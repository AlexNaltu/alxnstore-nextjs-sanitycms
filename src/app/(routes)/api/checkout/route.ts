import { IProduct } from "@/types/product-types";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();

  const { items, email, shippingCost } = reqBody;

  const extractingItems = items.map((item: IProduct) => ({
    quantity: item.quantity,
    price_data: {
      currency: "eur",
      unit_amount: Number(item.price) * 100,
      product_data: {
        name: item.name,
        images: [item.thumbnail],
      },
    },
  }));

  const orderData = items.map((item: IProduct) => ({
    external_variant_id: item.variant_id,
    quantity: item.quantity,
  }));

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-06-20",
    });

    const session = await stripe.checkout.sessions.create({
      line_items: extractingItems,
      mode: "payment",
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: [
          "AT",
          "BE",
          "BG",
          "CY",
          "CZ",
          "DE",
          "DK",
          "EE",
          "ES",
          "FI",
          "FR",
          "GR",
          "HR",
          "HU",
          "IE",
          "IT",
          "LT",
          "LU",
          "LV",
          "MT",
          "NL",
          "PL",
          "PT",
          "RO",
          "SE",
          "SI",
          "SK",
        ],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingCost * 100,
              currency: "eur",
            },
            display_name: "Standard Shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: "5",
              },
              maximum: {
                unit: "business_day",
                value: "10",
              },
            },
          },
        },
      ],
      phone_number_collection: { enabled: false },
      billing_address_collection: "required",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      metadata: {
        email,
        items: JSON.stringify(orderData),
      },
    });

    return NextResponse.json({
      message: "Connection is Active",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    console.log(extractingItems);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
