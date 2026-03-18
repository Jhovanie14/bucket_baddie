import type { Metadata } from "next";
import { Suspense } from "react";
import { getMenu, menuCategories } from "@/lib/menu-data";
import MenuClient from "@/components/menu/MenuClient";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu | Bucket Baddie",
  description: "Explore our full menu of crispy halal wings, tenders, buckets, and signature sauces.",
};

export default async function MenuPage() {
  const items = await getMenu();

  return (
    <div className="min-h-screen bg-neutral-950 pb-24">
      {/* Menu Hero Header */}
      <div className="relative w-full h-75 md:h-100 flex flex-col items-center justify-center text-center px-4 overflow-hidden group">
        <div className="absolute inset-0 bg-[#111111] border-b border-white/5" />

        {/* Subtle background image or pattern */}
        <div className="absolute inset-x-0 top-0 h-full opacity-10 bg-[url('/textures/noise.png')] mix-blend-overlay" />

        <div className="relative z-20 space-y-6 pt-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white italic tracking-tighter uppercase">
            BUCKET <span className="text-white/20 group-hover:text-pink-500 transition-colors duration-500">BADDIE</span>
          </h1>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest">
            <Link href="/" className="text-pink-500 cursor-pointer hover:underline">Home Page</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/20" />
            <span className="text-white/40">Menu</span>
          </div>
        </div>

        {/* Floating food elements (placeholders) */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12 relative z-20 mt-10 mb-20 lg:mb-32">
        <Suspense fallback={<div className="h-96 flex items-center justify-center text-white/20 font-black italic text-xl">Loading menu...</div>}>
          <MenuClient initialData={items} categories={menuCategories} />
        </Suspense>
      </div>

      {/* Delivery Challenge Banner */}
      {/* <DeliveryBanner /> */}
    </div>
  );
}
