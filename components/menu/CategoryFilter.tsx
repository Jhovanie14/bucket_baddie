"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/lib/menu-data";

interface CategoryFilterProps {
  categories: MenuCategory[];
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll active category into view if needed
  useEffect(() => {
    if (!scrollRef.current) return;
    
    // Find the active button
    const activeBtn = scrollRef.current.querySelector('[data-active="true"]');
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  return (
    <div className="relative w-full -mx-4 px-4 sm:mx-0 sm:px-0">
      {/* Scroll area with hidden scrollbar */}
      <div 
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto pb-4 snap-x scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              data-active={isActive}
              onClick={() => onSelectCategory(cat)}
              className={cn(
                "relative flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide snap-start transition-all duration-300",
                isActive
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent sm:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent sm:hidden" />
    </div>
  );
}
