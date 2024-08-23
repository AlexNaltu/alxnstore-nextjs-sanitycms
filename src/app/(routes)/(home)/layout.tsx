import type { Metadata } from "next";
import { Maven_Pro, Paytone_One } from "next/font/google";
import "./globals.css";
import TopCarousel from "@/components/carousel/top-carousel";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ReduxProvider from "@/providers/redux-provider";
import QueryProvider from "@/providers/query-client-provider";
import Clerk from "@/providers/clerk-provider";

const maven = Maven_Pro({ subsets: ["latin"], weight: "900" });

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
          className={`${maven.className} flex flex-col min-h-screen w-full bg-primary`}
        >
          <ReduxProvider>
            <QueryProvider>
              <TopCarousel />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </QueryProvider>
          </ReduxProvider>
        </body>
      </html>
    </Clerk>
  );
}
