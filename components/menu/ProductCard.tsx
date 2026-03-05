import { Flame, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/lib/menu-data";

export default function ProductCard({ item }: { item: MenuItem }) {
    // Helpers to check specific tags
    const isSpicy = item.tags?.includes("Spicy");
    const isNew = item.tags?.includes("New");
    const isPopular = item.popular;

    return (
        <div
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl",
                "bg-white/[0.03] border border-white/10",
                "hover:bg-white/[0.07] hover:border-white/20 hover:shadow-2xl",
                "transition-all duration-300"
            )}
        >
            {/* Image Area */}
            <div className="relative aspect-[4/3] w-full bg-neutral-900 overflow-hidden flex items-center justify-center">
                {item.image ? (
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    /* Placeholder gradient for missing images */
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
                )}

                {/* Badges container */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                    {isPopular && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-widest shadow-lg">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            Popular
                        </span>
                    )}
                    {isSpicy && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/20 text-xs font-bold text-red-400 uppercase tracking-widest shadow-lg">
                            <Flame className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                            Spicy
                        </span>
                    )}
                    {isNew && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 backdrop-blur-md border border-pink-500/20 text-xs font-bold text-pink-400 uppercase tracking-widest shadow-lg">
                            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                            New
                        </span>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {item.name}
                    </h3>
                    <span className="text-lg font-black text-white shrink-0">
                        ${item.price.toFixed(2)}
                    </span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed flex-1">
                    {item.description}
                </p>

                {/* Add to order button / interactions could go here */}
                <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-pink-500 hover:text-white transition-all text-sm font-bold uppercase tracking-wider text-white/70">
                    Order Pick-up
                </button>
            </div>
        </div>
    );
}
