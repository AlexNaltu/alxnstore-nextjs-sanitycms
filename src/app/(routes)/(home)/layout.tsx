import type { Metadata } from "next";
import { Maven_Pro, Paytone_One } from "next/font/google";
import "./globals.css";
import TopCarousel from "@/components/carousel/top-carousel";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ReduxProvider from "@/providers/redux-provider";
import QueryProvider from "@/providers/query-client-provider";
import { CartProvider } from "use-shopping-cart";
import Clerk from "@/providers/clerk-provider";

const inter = Maven_Pro({ subsets: ["latin"], weight: "900" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alxnstore.shop"),
  keywords: ["E-commerce", "Clothing", "Fashion", "Store"],
  title: {
    default: "Alxn Store",
    template: "%s | Alxn Store",
  },
  openGraph: {
    description: "Alxn Store is a clothing store",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Clerk>
      <html lang="en">
        <body
          className={`${inter.className} flex flex-col min-h-screen w-full bg-primary`}
        >
          <ReduxProvider>
            <CartProvider
              cartMode="client-only"
              stripe=""
              currency="EUR"
              shouldPersist={true}
              mode="payment"
              successUrl="/success"
              cancelUrl="/cancel"
            >
              <QueryProvider>
                <TopCarousel />
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </QueryProvider>
            </CartProvider>
          </ReduxProvider>
        </body>
      </html>
    </Clerk>
  );
}
