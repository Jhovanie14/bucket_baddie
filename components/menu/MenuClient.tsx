"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import type { MenuItem, MenuCategory } from "@/lib/menu-data";

interface MenuClientProps {
  initialData: MenuItem[];
  categories: MenuCategory[];
}

export default function MenuClient({ initialData, categories }: MenuClientProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic runs entirely on the client without network requests
  const filteredItems = useMemo(() => {
    return initialData.filter((item) => {
      // Filter by category
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      
      // Filter by search query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query || 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialData, activeCategory, searchQuery]);

  return (
    <div className="w-full space-y-8 sm:space-y-12">
      
      {/* Search & Filter Header */}
      <div className="flex flex-col gap-6">
        
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-white/40" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search buckets, wings, or spicy..."
            className="w-full h-14 pl-12 pr-4 bg-neutral-900 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all shadow-inner"
          />
        </div>

        {/* Categories */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            // Optionally clear search when switching categories
            // setSearchQuery(""); 
          }}
        />

      </div>

      {/* Grid Results */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center border border-white/5 rounded-3xl bg-neutral-900/50">
          <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mb-6">
            <Search className="w-8 h-8 text-white/20" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
          <p className="text-white/50 max-w-sm">
            We couldn't find anything matching "{searchQuery}" in {activeCategory}. 
            Try adjusting your search or category filter.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
}
