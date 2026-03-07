"use client";

import { Star, Share2, CornerDownRight } from "lucide-react";
import type { MenuItem } from "@/lib/menu-data";

export default function ProductInfo({ item }: { item: MenuItem }) {
    return (
        <div className="flex flex-col space-y-8">
            {/* Header Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-500 text-[10px] font-black uppercase tracking-widest">
                        -5% OFF
                    </span>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
                        <span className="text-white/30 text-xs font-bold ml-2">(1.2k Reviews)</span>
                    </div>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
                    {item.name}
                </h1>

                <p className="text-white/40 font-bold leading-relaxed max-w-xl">
                    {item.description} There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 py-6 border-y border-white/5">
                <span className="text-4xl font-black text-pink-500 tracking-tighter italic">
                    ${item.price.toFixed(2)}
                </span>
                <span className="text-xl font-bold text-white/20 line-through">
                    ${(item.price * 1.05).toFixed(2)}
                </span>
            </div>

            {/* Actions */}
            <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex-1 h-14 px-8 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 opacity-50 cursor-not-allowed">
                        <CornerDownRight className="w-5 h-5" />
                        Pickup Only
                    </div>

                    <button className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center hover:border-white/20 transition-colors text-white/40 hover:text-white">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-y-4 pt-10 border-t border-white/5">
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">SKU:</p>
                    <p className="text-sm font-bold text-white/60">BADDIE-{item.id.toUpperCase()}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">Category:</p>
                    <p className="text-sm font-bold text-white/60">{item.category}</p>
                </div>
                <div className="col-span-2 space-y-1">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">Tags:</p>
                    <div className="flex gap-2">
                        {item.tags?.map(tag => (
                            <span key={tag} className="text-xs font-bold text-pink-500">#{tag}</span>
                        )) || <span className="text-xs font-bold text-white/30 italic">None</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
