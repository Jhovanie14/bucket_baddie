"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/menu/ProductCard";
import type { MenuItem, MenuCategory } from "@/lib/menu-data";

interface HomeCategoryTabsProps {
  initialItems: MenuItem[];
  categories: MenuCategory[];
}

export default function HomeCategoryTabs({ initialItems, categories }: HomeCategoryTabsProps) {
  // Exclude "All" and "Drinks" from the homepage tabs for a tighter focus
  const displayCategories = categories.filter(c => c !== "All" && c !== "Drinks");
  const [activeTab, setActiveTab] = useState<MenuCategory>(displayCategories[0]);

  // Filter items matching the active tab, limit to 4 for the homepage
  const activeItems = initialItems
    .filter((item) => item.category === activeTab)
    .slice(0, 4);

  return (
    <section className="bg-neutral-950 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
         {/* Header & Tabs Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Explore the <span className="text-pink-500">Menu</span>
            </h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {displayCategories.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`
                      px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300
                      ${isActive 
                        ? "bg-white text-neutral-950 shadow-xl shadow-white/10" 
                        : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          
          <Link
            href={`/menu?category=${activeTab}`}
            className="group flex items-center gap-2 text-white/50 text-sm font-bold tracking-widest uppercase hover:text-pink-400 transition-colors shrink-0"
          >
            View All {activeTab}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 min-h-[400px]">
          {activeItems.map((item) => (
            <div key={item.id} className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both">
               <ProductCard item={item} />
            </div>
          ))}
          {/* Fill empty spots if category has < 4 items to maintain grid height */}
           {Array.from({ length: Math.max(0, 4 - activeItems.length) }).map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:flex items-center justify-center border border-white/5 border-dashed rounded-3xl bg-white/[0.01]">
              <span className="text-white/20 text-sm font-medium">More coming soon</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
