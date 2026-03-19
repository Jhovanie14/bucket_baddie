"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/lib/menu-data";

export default function PopularItems({ items }: { items: MenuItem[] }) {
    // Sort or filter for only popular items.
    const popularItems = items.filter((item) => item.popular).slice(0, 4);

    return (
        <section className="bg-neutral-950 py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-px bg-pink-500" />
                        <h4 className="text-pink-500 font-bold uppercase tracking-widest text-xs">
                            Top Picks
                        </h4>
                        <span className="w-8 h-px bg-pink-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        Popular Food Items
                    </h2>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {popularItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex flex-col bg-white/3] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                        >

                            {/* Product Image Area */}
                            <div className="relative aspect-square w-full bg-neutral-900/50 flex items-center justify-center p-6 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300">
                                {item.image ? (
                                    <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>
                                ) : (
                                    // Placeholder if no image
                                    <div className="w-32 h-32 rounded-full bg-neutral-800 flex items-center justify-center">
                                        <Star className="w-8 h-8 text-neutral-600" />
                                    </div>
                                )}

                                {/* Floating Price Tag */}
                                <div className="absolute top-4 right-4 bg-pink-500 text-white font-black px-3 py-1 rounded-full text-sm shadow-lg shadow-pink-500/20">
                                    ${item.price.toFixed(2)}
                                </div>
                            </div>

                            {/* Product Details Area */}
                            <div className="flex flex-col items-center text-center p-6 pt-4 gap-2 relative z-10 bg-linear-to-t from-neutral-950 to-transparent">
                                <Link href={`/menu?category=${item.category}`} className="w-full">
                                    <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors uppercase tracking-wide truncate">
                                        {item.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center gap-1 text-amber-400 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                    ))}
                                </div>

                                {/* Order Button */}
                                <button className={cn(
                                    "w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300",
                                    "bg-white/5 border border-white/10 text-white/80",
                                    "hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/25 active:scale-95"
                                )}>
                                    Order Pick-up
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
