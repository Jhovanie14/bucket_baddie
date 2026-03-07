"use client";

import { useState } from "react";
import type { MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type Tab = "description" | "additional" | "reviews";

export default function ProductTabs({ item }: { item: MenuItem }) {
    const [activeTab, setActiveTab] = useState<Tab>("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "additional", label: "Additional Information" },
        { id: "reviews", label: "Reviews (1.2k)" },
    ];

    return (
        <div className="space-y-12">
            {/* Tab Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as Tab)}
                        className={cn(
                            "px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border italic",
                            activeTab === tab.id
                                ? "bg-pink-500 border-pink-500 text-white shadow-xl shadow-pink-500/20 scale-105"
                                : "bg-neutral-900 border-white/5 text-white/30 hover:border-white/10 hover:text-white"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-8 sm:p-12 bg-neutral-900/50 border border-white/5 rounded-[40px] text-white/40 font-bold leading-relaxed">
                {activeTab === "description" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase whitespace-pre-wrap">
                            EXPERIENCE IS <span className="text-pink-500">OVER THE WORLD</span> VISIT
                        </h3>
                        <p className="max-w-4xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus quam sed accumsan erat velit ac commodi est. Vestibulum ac Aliquam id elementum congue, sem purus eleifend, seen amed im elementum sem purus eleifend, sem purus eleifend, sem purus eleifend.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-white uppercase tracking-widest italic">MORE DETAILS</h4>
                                <ul className="space-y-3 text-xs">
                                    {["Lorem Ipsum is simply dummy text of the printing", "Lorem Ipsum has been the standard dummy text", "Type here your detail one by one here add", "Has been the industry's standard dummy text"].map((li, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-4 pt-4 md:pt-0">
                                <ul className="space-y-3 text-xs md:mt-8">
                                    {["Lorem Ipsum generators on the tend to repeat", "If you are going to use a passage", "Lorem Ipsum generators on the tend to repeat", "Lorem Ipsum generators on the tend to repeat"].map((li, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "additional" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                                <span className="text-white/20 uppercase text-[10px] font-black tracking-widest">Weight</span>
                                <span className="text-white text-sm font-bold italic">0.5 kg</span>
                            </div>
                            <div className="flex justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                                <span className="text-white/20 uppercase text-[10px] font-black tracking-widest">Dimensions</span>
                                <span className="text-white text-sm font-bold italic">10 × 10 × 15 cm</span>
                            </div>
                            <div className="flex justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                                <span className="text-white/20 uppercase text-[10px] font-black tracking-widest">Alergens</span>
                                <span className="text-white text-sm font-bold italic">Gluten, Dairy, Spices</span>
                            </div>
                            <div className="flex justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                                <span className="text-white/20 uppercase text-[10px] font-black tracking-widest">Halal Status</span>
                                <span className="text-pink-500 text-sm font-bold italic">100% Zabiha Halal</span>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "reviews" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black text-white italic tracking-tighter uppercase whitespace-pre-wrap">
                                CUSTOMER <span className="text-pink-500">REVIEWS</span>
                            </h3>
                            <button className="px-6 py-2.5 rounded-xl border border-pink-500/50 text-pink-500 text-[10px] font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all">Write Review</button>
                        </div>

                        <div className="space-y-6">
                            {[1, 2].map(r => (
                                <div key={r} className="p-6 rounded-3xl bg-black/20 border border-white/5 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10" />
                                            <div>
                                                <p className="text-sm font-black text-white italic uppercase tracking-tighter">Baddie Fan {r}</p>
                                                <p className="text-[10px] font-bold text-white/20">March 6, 2026</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />)}
                                        </div>
                                    </div>
                                    <p className="text-xs italic">
                                        This bucket changed my life. The wings were crispy, the heat was perfect, and the delivery was fast! Highly recommend!
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
