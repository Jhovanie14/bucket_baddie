"use client";

import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MenuCategory, MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface MenuSidebarProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  priceRange: [number, number];
  dataMaxPrice: number;
  setPriceRange: (range: [number, number]) => void;
  popularItems: MenuItem[];
}

export default function MenuSidebar({
  categories,
  activeCategory,
  onSelectCategory,
  priceRange,
  dataMaxPrice,
  setPriceRange,
  popularItems,
}: MenuSidebarProps) {
  return (
    <aside className="w-full lg:w-64 space-y-10">
      {/* Categories */}
      <section>
        <h3 className="text-xs font-black text-white/30 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-pink-500 rounded-full" />
          Categories
        </h3>
        <div className="flex flex-col gap-1.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={cn(
                  "group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 border text-sm font-bold",
                  isActive
                    ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/20"
                    : "bg-neutral-900 border-white/5 text-white/50 hover:border-white/20 hover:text-white"
                )}
              >
                <span className="italic">{cat}</span>
                <ChevronRight
                  className={cn(
                    "w-3.5 h-3.5 transition-all duration-200",
                    isActive ? "opacity-100" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  )}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Price Filter */}
      <section>
        <h3 className="text-xs font-black text-white/30 uppercase tracking-widest mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-amber-500 rounded-full" />
          Price Range
        </h3>
        <div className="space-y-5 px-1">
          <Slider
            value={priceRange}
            min={0}
            max={dataMaxPrice}
            step={1}
            onValueChange={(v) => setPriceRange(v as [number, number])}
            className="**:data-[slot=slider-range]:bg-pink-500 **:data-[slot=slider-thumb]:bg-white **:data-[slot=slider-thumb]:border-pink-500"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white/40 italic">
              ${priceRange[0].toFixed(0)} — ${priceRange[1].toFixed(0)}
            </span>
            <button
              onClick={() => setPriceRange([0, dataMaxPrice])}
              className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-pink-500 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      {popularItems.length > 0 && (
        <section>
          <h3 className="text-xs font-black text-white/30 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-amber-400 rounded-full" />
            Popular
          </h3>
          <div className="space-y-3">
            {popularItems.map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.id}`}
                className="flex gap-3 p-2.5 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-white/15 transition-colors group"
              >
                <div className="relative w-14 h-14 rounded-lg bg-neutral-800 shrink-0 overflow-hidden">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] text-white/10 font-black">IMG</div>
                  )}
                </div>
                <div className="space-y-1 py-0.5 min-w-0">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs font-black text-white group-hover:text-pink-400 transition-colors italic truncate">
                    {item.name.toUpperCase()}
                  </p>
                  <p className="text-xs font-bold text-pink-500">
                    ${item.price.toFixed(2)}{" "}
                    <span className="text-white/20 line-through">${(item.price * 1.05).toFixed(2)}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}
