"use client";

import { Flame, Star, Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/lib/menu-data";

export default function ProductCard({ item }: { item: MenuItem }) {
    const isSpicy = item.tags?.includes("Spicy");
    const isNew = item.tags?.includes("New");
    const isPopular = item.popular;

    return (
        <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
            {/* Wishlist Button */}
            <button className="absolute top-4 left-4 z-20 w-9 h-9 rounded-xl bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors">
                <Heart className="w-5 h-5 text-black/40 group-hover:text-pink-500 transition-colors" />
            </button>

            {/* Link to Product Single - Image Area */}
            <Link href={`/menu/${item.id}`} className="relative aspect-[4/3] w-full p-6 sm:p-8 flex items-center justify-center bg-neutral-50/50 overflow-hidden">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-32 h-32 bg-neutral-200 rounded-full animate-pulse flex items-center justify-center italic text-[10px] text-black/10 font-black">
                        BADDIE PIC
                    </div>
                )}
            </Link>

            {/* Link to Product Single - Content Area */}
            <Link href={`/menu/${item.id}`} className="flex flex-col items-center text-center p-6 space-y-3 bg-white hover:bg-neutral-50 transition-colors">
                {/* Discount Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFB800]/10 text-[#FFB800] text-[10px] font-black uppercase tracking-tighter">
                    -5% OFF
                </div>

                <div className="space-y-1">
                    <p className="text-[10px] font-black text-[#FFB800] uppercase tracking-widest">
                        ${item.price.toFixed(2)} <span className="text-black/20 line-through ml-1">${(item.price * 1.05).toFixed(2)}</span>
                    </p>
                    <h3 className="text-lg font-black text-neutral-900 uppercase tracking-tighter italic leading-tight">
                        {item.name}
                    </h3>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                </div>
            </Link>
        </div>
    );
}
