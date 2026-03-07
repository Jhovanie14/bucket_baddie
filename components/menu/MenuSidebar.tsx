"use client";

import { Search, ChevronRight, Sliders, LayoutGrid, List, Star } from "lucide-react";
import type { MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

interface MenuSidebarProps {
    categories: MenuCategory[];
    activeCategory: MenuCategory;
    onSelectCategory: (category: MenuCategory) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    selectedSizes: string[];
    setSelectedSizes: (sizes: string[]) => void;
}

export default function MenuSidebar({
    categories,
    activeCategory,
    onSelectCategory,
    priceRange,
    setPriceRange,
    selectedSizes,
    setSelectedSizes,
}: MenuSidebarProps) {
    const toggleSize = (size: string) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    return (
        <aside className="w-full lg:w-72 space-y-10">
            {/* Categories Section */}
            <section>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-pink-500 rounded-full" />
                    Categories
                </h3>
                <div className="flex flex-col gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onSelectCategory(cat)}
                            className={cn(
                                "group flex items-center justify-between p-3 rounded-2xl transition-all duration-300 border",
                                activeCategory === cat
                                    ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/20"
                                    : "bg-neutral-900 border-white/5 text-white/50 hover:border-white/20 hover:text-white"
                            )}
                        >
                            <span className="font-bold flex items-center gap-3 italic">
                                {cat}
                            </span>
                            <ChevronRight className={cn(
                                "w-4 h-4 transition-transform duration-300",
                                activeCategory === cat ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            )} />
                        </button>
                    ))}
                </div>
            </section>

            {/* Price Filter Section */}
            <section>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-amber-500 rounded-full" />
                    Price Filter
                </h3>
                <div className="px-2 space-y-6">
                    <Slider
                        defaultValue={[0, 100]}
                        value={priceRange}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="[&_[data-slot=slider-range]]:bg-pink-500 [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-thumb]]:border-pink-500"
                    />
                    <div className="flex items-center justify-between text-sm font-bold">
                        <span className="text-white/40 italic">
                            Price: <span className="text-white">${priceRange[0]} — ${priceRange[1]}</span>
                        </span>
                        <button
                            onClick={() => setPriceRange([0, 100])}
                            className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[10px] uppercase font-black tracking-widest hover:bg-pink-500 hover:border-pink-500 transition-all"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </section>

            {/* Filter By Size */}
            <section>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    Filter By Size
                </h3>
                <div className="space-y-3">
                    {["Small", "Medium", "Large", "Extra Large"].map((size) => (
                        <label
                            key={size}
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => toggleSize(size)}
                        >
                            <div className={cn(
                                "w-5 h-5 rounded bg-neutral-900 border flex items-center justify-center transition-colors",
                                selectedSizes.includes(size) ? "border-pink-500" : "border-white/10 group-hover:border-pink-500/50"
                            )}>
                                <div className={cn(
                                    "w-2.5 h-2.5 rounded-sm bg-pink-500 transition-transform",
                                    selectedSizes.includes(size) ? "scale-100" : "scale-0 group-hover:scale-50"
                                )} />
                            </div>
                            <span className={cn(
                                "text-sm font-bold transition-colors",
                                selectedSizes.includes(size) ? "text-white" : "text-white/60 group-hover:text-white"
                            )}>{size}</span>
                        </label>
                    ))}
                </div>
            </section>

            {/* New Arrivals Section */}
            <section>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-pink-500 rounded-full" />
                    New Arrival
                </h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4 p-2 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                            <div className="w-16 h-16 rounded-xl bg-neutral-800 shrink-0" />
                            <div className="space-y-1 py-1">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />)}
                                </div>
                                <h4 className="text-xs font-black text-white group-hover:text-pink-400 transition-colors line-clamp-1 italic">HOT BADDIE WINGS</h4>
                                <p className="text-xs font-bold text-pink-500">$12.50 <span className="text-white/20 line-through ml-1">$15.00</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </aside>
    );
}
