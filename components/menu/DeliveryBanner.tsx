"use client";

import Image from "next/image";
import { Timer } from "lucide-react";

export default function DeliveryBanner() {
    return (
        <section className="relative w-full bg-[#008A2E] overflow-hidden py-12 md:py-20 group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 right-10 w-32 h-32 border-8 border-white rounded-full" />
                <div className="absolute bottom-10 right-20 w-48 h-48 border-12 border-white rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="max-w-2xl text-center md:text-left space-y-4">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-widest">
                                Crispy, Every Bite Taste
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white italic leading-[0.9] tracking-tighter uppercase">
                            30 MINUTES FAST <br />
                            <span className="text-white/40">DELIVERY</span> CHALLENGE
                        </h2>
                    </div>

                    <div className="relative w-64 h-64 md:w-96 md:h-96 shrink-0 group-hover:scale-105 transition-transform duration-700">
                        {/* Delivery Rider Image Placeholder - using a div with an icon/text for now as I don't have the asset */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4/5 h-4/5 bg-white/10 rounded-full blur-3xl" />
                            <Timer className="w-32 h-32 text-white opacity-20" />
                        </div>

                        {/* Small floating elements */}
                        <div className="absolute top-10 left-0 animate-bounce delay-100">
                            <div className="w-12 h-12 bg-[#FFB800] rounded-2xl flex items-center justify-center rotate-12 shadow-xl shadow-black/20">
                                <span className="text-xl">🔥</span>
                            </div>
                        </div>
                        <div className="absolute bottom-10 right-0 animate-bounce delay-300">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center -rotate-12 shadow-xl shadow-black/20">
                                <span className="text-2xl">🍗</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
