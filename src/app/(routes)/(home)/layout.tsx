import type { Metadata } from "next";
import { Bakbak_One } from "next/font/google";
import "./globals.css";
import TopCarousel from "@/components/carousel/top-carousel";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ReduxProvider from "@/providers/redux-provider";

const inter = Bakbak_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen w-full`}>
        <ReduxProvider>
          <TopCarousel />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
