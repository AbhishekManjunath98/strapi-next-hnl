import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import "./globals.css";

import { getGlobalPageData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
// import { Footer } from "@/components/custom/Footer";
import { LampDemo } from "./lampDemo";
import { NavigationMenuBar } from "@/components/custom/navigation";
import Home from "@/components/custom/Home";
import FeaturedProjects from "@/components/custom/FeaturedProjects";
import PropertyCollections from "@/components/custom/PropertyCollections";
import SearchSection from "@/components/custom/SearchSection";
import TopDevelopers from "@/components/custom/TopDevelopers";
import Footer from "@/components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalPageData();
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <nav>
        <Header data={globalData.header} />
        </nav>
        {/* <LampDemo/> */}
        {/* <NavigationMenuBar/> */}
        {/* <Home/> */}
        {/* <SearchSection />
        <FeaturedProjects />
        <PropertyCollections />
      <TopDevelopers />
      <Footer/> */}
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
