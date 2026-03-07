"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export default function ProductGallery({ item }: { item: MenuItem }) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Simulation of multiple images using the same one with different crops/filters
    const images = [
        item.image || "/placeholder.jpg",
        item.image || "/placeholder.jpg",
        item.image || "/placeholder.jpg",
        item.image || "/placeholder.jpg",
    ];

    return (
        <div className="space-y-6">
            {/* Main Image View */}
            <div className="relative aspect-square w-full bg-white rounded-[40px] border border-white/5 overflow-hidden group cursor-zoom-in">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 italic text-white/10 font-black text-2xl">
                        BADDIE PIC
                    </div>
                )}

                {/* Zoom Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xl shadow-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Search className="w-5 h-5" />
                </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={cn(
                            "relative aspect-square rounded-2xl overflow-hidden border transition-all duration-300",
                            activeIndex === idx
                                ? "border-pink-500 bg-pink-500/5 shadow-lg shadow-pink-500/10"
                                : "border-white/5 bg-white/5 hover:border-white/20"
                        )}
                    >
                        {item.image ? (
                            <Image
                                src={img}
                                alt={`${item.name} thumbnail ${idx + 1}`}
                                fill
                                className={cn(
                                    "object-contain p-3 transition-opacity duration-300",
                                    activeIndex === idx ? "opacity-100" : "opacity-40 hover:opacity-100"
                                )}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] text-white/10 font-black">
                                IMG {idx + 1}
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
