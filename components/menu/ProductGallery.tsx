"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import type { MenuItem, MenuItemOption } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export default function ProductGallery({ item, selectedOption, onOptionChange }: {
    item: MenuItem;
    selectedOption?: MenuItemOption | null;
    onOptionChange?: (option: MenuItemOption | null) => void;
}) {
    // Build thumbnail list from options if available, otherwise use the main image
    const images = item.options && item.options.length > 0
        ? item.options.map((opt) => ({ src: opt.image, label: opt.label }))
        : [{ src: item.image || "", label: item.name }];

    const activeIndex = item.options && item.options.length > 0 && selectedOption
        ? item.options.findIndex((opt) => opt.label === selectedOption.label)
        : 0;

    const displayImage = images[activeIndex >= 0 ? activeIndex : 0]?.src || item.image || null;

    return (
        <div className="space-y-6">
            {/* Main Image View */}
            <div className="relative aspect-square w-full bg-white rounded-[40px] border border-white/5 overflow-hidden group cursor-zoom-in">
                {displayImage ? (
                    <Image
                        src={displayImage}
                        alt={item.name}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
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
                        onClick={() => {
                            if (item.options && item.options[idx]) {
                                onOptionChange?.(item.options[idx]);
                            }
                        }}
                        className={cn(
                            "relative aspect-square rounded-2xl overflow-hidden border transition-all duration-300",
                            activeIndex === idx
                                ? "border-pink-500 bg-pink-500/5 shadow-lg shadow-pink-500/10"
                                : "border-white/5 bg-white/5 hover:border-white/20"
                        )}
                    >
                        {img.src ? (
                            <>
                                <Image
                                    src={img.src}
                                    alt={img.label}
                                    fill
                                    className={cn(
                                        "object-contain p-3 transition-opacity duration-300",
                                        activeIndex === idx ? "opacity-100" : "opacity-40 hover:opacity-100"
                                    )}
                                />
                                {images.length > 1 && (
                                    <span className="absolute bottom-1 inset-x-0 text-center text-[7px] font-black text-white/50 uppercase tracking-wider">
                                        {img.label}
                                    </span>
                                )}
                            </>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] text-white/10 font-black">
                                {img.label || `IMG ${idx + 1}`}
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
