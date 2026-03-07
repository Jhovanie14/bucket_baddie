"use client";

import { useState, useMemo } from "react";
import { Search, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";
import MenuSidebar from "./MenuSidebar";
import type { MenuItem, MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

interface MenuClientProps {
  initialData: MenuItem[];
  categories: MenuCategory[];
}

export default function MenuClient({ initialData, categories }: MenuClientProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");

  // Filter logic
  const filteredItems = useMemo(() => {
    return initialData.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];

      const matchesSize = selectedSizes.length === 0 ||
        (item.sizes && item.sizes.some(size => selectedSizes.includes(size)));

      return matchesCategory && matchesSearch && matchesPrice && matchesSize;
    });
  }, [initialData, activeCategory, searchQuery, priceRange, selectedSizes]);

  return (
    <div className="flex flex-col lg:flex-row gap-12 pt-8">

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <MenuSidebar
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-8">

        {/* Top Bar / Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:p-6 bg-neutral-900/50 border border-white/5 rounded-3xl backdrop-blur-sm">
          <div className="flex items-center gap-4 text-white/50 text-sm font-bold">
            <button className="flex lg:hidden items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-500 text-white">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="hidden sm:block">
              Showing <span className="text-pink-500">{filteredItems.length}</span> Results
            </div>
          </div>

          <div className="flex items-center gap-4 self-end md:self-auto">
            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-[10px] uppercase font-black tracking-widest hidden sm:block">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer"
              >
                <option value="default" className="bg-neutral-900">Default</option>
                <option value="price-low" className="bg-neutral-900">Price: Low to High</option>
                <option value="price-high" className="bg-neutral-900">Price: High to Low</option>
              </select>
            </div>

            {/* View Modes */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-4">
              <button
                onClick={() => setViewMode("grid")}
                className={cn("p-2 rounded-lg transition-colors", viewMode === "grid" ? "text-pink-500 bg-pink-500/10" : "text-white/20 hover:text-white")}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn("p-2 rounded-lg transition-colors", viewMode === "list" ? "text-pink-500 bg-pink-500/10" : "text-white/20 hover:text-white")}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredItems.length > 0 ? (
          <div className={cn(
            "grid gap-6 sm:gap-8",
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1"
          )}>
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 px-4 text-center border border-white/5 rounded-[40px] bg-neutral-900/30">
            <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center mb-8 border border-white/5 shadow-2xl">
              <Search className="w-10 h-10 text-white/10" />
            </div>
            <h3 className="text-3xl font-black text-white mb-3 italic tracking-tighter">BADDIE GHOSTED US</h3>
            <p className="text-white/40 max-w-sm font-bold text-sm">
              We couldn't find anything matching your search. Try a different category or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-10 px-8 py-4 rounded-2xl bg-pink-500 text-white font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-pink-500/20"
            >
              Reset Menu
            </button>
          </div>
        )}

        {/* Pagination placeholder */}
        <div className="flex items-center justify-center gap-2 pt-12">
          {[1, 2, 3, 4].map(p => (
            <button key={p} className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border transition-all",
              p === 1 ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/20" : "bg-neutral-900 border-white/5 text-white/30 hover:border-white/20 hover:text-white"
            )}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
