import type { Metadata } from "next";
import { getMenu, menuCategories } from "@/lib/menu-data";
import MenuClient from "@/components/menu/MenuClient";

export const metadata: Metadata = {
  title: "Menu | Bucket Baddie",
  description: "Explore our full menu of crispy halal wings, tenders, buckets, and signature sauces.",
};

export default async function MenuPage() {
  // Fetch initial data on the server
  const items = await getMenu();

  return (
    <div className="min-h-screen bg-neutral-950 pb-24">
      {/* Menu Hero Header */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-8 sm:mb-12">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/hero/menu-bg-placeholder.jpg')] bg-cover bg-center opacity-20 hidden sm:block" />
        <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply" />
        
        <div className="relative z-20 space-y-4 max-w-3xl mx-auto pt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-400 font-bold uppercase tracking-widest">
            Full Menu
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">Share.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Find your perfect bucket below. All chicken is 100% zabiha halal.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
        <MenuClient initialData={items} categories={menuCategories} />
      </div>
    </div>
  );
}