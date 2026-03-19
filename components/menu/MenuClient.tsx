"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, LayoutGrid, List, SlidersHorizontal, X, ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import MenuSidebar from "./MenuSidebar";
import type { MenuItem, MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

interface MenuClientProps {
  initialData: MenuItem[];
  categories: MenuCategory[];
}

export default function MenuClient({ initialData, categories }: MenuClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const dataMaxPrice = Math.ceil(Math.max(...initialData.map((i) => i.price)));

  // All filter state lives in the URL
  const activeCategory = (searchParams.get("category") as MenuCategory) ?? "All";
  const searchQuery = searchParams.get("q") ?? "";
  const minPrice = Number(searchParams.get("min") ?? 0);
  const maxPrice = Number(searchParams.get("max") ?? dataMaxPrice);
  const sortBy = searchParams.get("sort") ?? "default";
  const currentPage = Math.max(1, Number(searchParams.get("page") ?? 1));
  const ITEMS_PER_PAGE = 9;

  const setParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    // Reset page when changing filters (but not when changing page itself)
    if (key !== "page") params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const setPriceRange = ([min, max]: [number, number]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (min > 0) params.set("min", String(min)); else params.delete("min");
    if (max < dataMaxPrice) params.set("max", String(max)); else params.delete("max");
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredItems = useMemo(() => {
    let items = initialData.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    });

    if (sortBy === "price-low") items = [...items].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") items = [...items].sort((a, b) => b.price - a.price);
    else if (sortBy === "popular") items = [...items].sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false));

    return items;
  }, [initialData, activeCategory, searchQuery, minPrice, maxPrice, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedItems = filteredItems.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const hasFilters =
    activeCategory !== "All" ||
    !!searchQuery ||
    minPrice > 0 ||
    maxPrice < dataMaxPrice ||
    sortBy !== "default";

  const sidebarProps = {
    categories,
    activeCategory,
    onSelectCategory: (cat: MenuCategory) => setParam("category", cat === "All" ? null : cat),
    priceRange: [minPrice, maxPrice] as [number, number],
    dataMaxPrice,
    setPriceRange,
    popularItems: initialData.filter((i) => i.popular),
  };

  return (
    <>
      {/* Mobile sidebar overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-300",
          sidebarOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
            sidebarOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setSidebarOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-80 max-w-[90vw] bg-neutral-950 border-r border-white/5 overflow-y-auto transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 pb-4 border-b border-white/5">
            <span className="text-lg font-black text-white uppercase tracking-tighter italic">Filters</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-6">
            <MenuSidebar
              {...sidebarProps}
              onSelectCategory={(cat) => {
                sidebarProps.onSelectCategory(cat);
                setSidebarOpen(false);
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pt-8">
        {/* Sidebar — desktop only */}
        <div className="hidden lg:block shrink-0">
          <MenuSidebar {...sidebarProps} />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 space-y-5">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-neutral-900/50 border border-white/5 rounded-2xl backdrop-blur-sm">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setParam("q", e.target.value || null)}
                className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setParam("q", null)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Mobile filter trigger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex lg:hidden items-center gap-2 h-11 px-4 rounded-xl bg-pink-500 text-white text-xs font-black uppercase tracking-widest"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setParam("sort", e.target.value === "default" ? null : e.target.value)}
                className="h-11 px-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white focus:outline-none focus:border-pink-500/40 cursor-pointer transition-colors"
              >
                <option value="default" className="bg-neutral-900">Default</option>
                <option value="popular" className="bg-neutral-900">Most Popular</option>
                <option value="price-low" className="bg-neutral-900">Price ↑</option>
                <option value="price-high" className="bg-neutral-900">Price ↓</option>
              </select>

              {/* View toggle */}
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    viewMode === "grid" ? "bg-pink-500 text-white" : "text-white/30 hover:text-white"
                  )}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    viewMode === "list" ? "bg-pink-500 text-white" : "text-white/30 hover:text-white"
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results count + clear */}
          <div className="flex items-center justify-between px-1">
            <p className="text-white/30 text-xs font-bold">
              <span className="text-pink-500 font-black">{filteredItems.length}</span>{" "}
              {filteredItems.length === 1 ? "item" : "items"} found
            </p>
            {hasFilters && (
              <button
                onClick={() => router.push(pathname, { scroll: false })}
                className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-pink-500 transition-colors"
              >
                <X className="w-3 h-3" /> Clear all
              </button>
            )}
          </div>

          {/* Grid / List */}
          {filteredItems.length > 0 ? (
            <>
              <div
                className={cn(
                  "grid gap-5",
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                )}
              >
                {paginatedItems.map((item) => (
                  <ProductCard key={item.id} item={item} viewMode={viewMode} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-8">
                  <button
                    onClick={() => setParam("page", safePage > 1 ? String(safePage - 1) : null)}
                    disabled={safePage <= 1}
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300",
                      safePage <= 1
                        ? "border-white/5 text-white/10 cursor-not-allowed"
                        : "border-white/10 text-white/50 hover:border-pink-500/40 hover:text-pink-500 bg-white/5"
                    )}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setParam("page", page === 1 ? null : String(page))}
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black uppercase transition-all duration-300 border",
                        safePage === page
                          ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/20"
                          : "border-white/10 text-white/40 hover:border-pink-500/40 hover:text-pink-500 bg-white/5"
                      )}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setParam("page", safePage < totalPages ? String(safePage + 1) : String(totalPages))}
                    disabled={safePage >= totalPages}
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300",
                      safePage >= totalPages
                        ? "border-white/5 text-white/10 cursor-not-allowed"
                        : "border-white/10 text-white/50 hover:border-pink-500/40 hover:text-pink-500 bg-white/5"
                    )}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center border border-white/5 rounded-[32px] bg-neutral-900/20">
              <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mb-6 border border-white/5">
                <Search className="w-8 h-8 text-white/10" />
              </div>
              <h3 className="text-2xl font-black text-white italic tracking-tighter">
                BADDIE GHOSTED US
              </h3>
              <p className="text-white/30 text-sm font-bold mt-2 mb-8 max-w-xs">
                Nothing matches your filters. Try a different search or reset.
              </p>
              <button
                onClick={() => router.push(pathname, { scroll: false })}
                className="px-8 py-3 rounded-xl bg-pink-500 text-white font-black uppercase tracking-widest hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/20"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
