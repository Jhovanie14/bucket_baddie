"use client";

import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const showcaseItems = [
    {
        id: "wings",
        title: "The Wings",
        tagline: "Double-Fried Perfection",
        description: "Huge, juicy, zabiha halal wings tossed in our signature house-made sauces. Built for maximum crunch and drip.",
        color: "from-orange-500 to-red-600",
        badge: "Most Popular",
        icon: Flame,
        href: "/menu?category=Wings",
        span: "col-span-1 lg:col-span-2 row-span-2",
    },
    {
        id: "tenders",
        title: "Buttermilk Tenders",
        tagline: "No Bones, All Baddie",
        description: "Giant hand-breaded tenders. Dip 'em, dunk 'em, devour 'em.",
        color: "from-amber-400 to-orange-500",
        href: "/menu?category=Tenders",
        span: "col-span-1",
    },
    {
        id: "fries",
        title: "Loaded Fries",
        tagline: "A Meal on its Own",
        description: "Crispy crinkle cuts buried under chopped tenders, jalapeños, and Pink Heat sauce.",
        color: "from-pink-500 to-rose-600",
        badge: "New",
        icon: Sparkles,
        href: "/menu?category=Fries",
        span: "col-span-1",
    },
];

export default function MenuShowcase() {
    return (
        <section className="bg-neutral-950 py-24 sm:py-32 relative overflow-hidden">
            {/* Background glow behind grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                            The Holy <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-pink-600">Trinity.</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            We keep the menu small so we can perfect the essentials. Halal chicken, fresh ingredients, and flavors that refuse to miss.
                        </p>
                    </div>
                    <Link
                        href="/menu"
                        className="group flex items-center gap-2 text-pink-400 font-bold tracking-widest uppercase hover:text-white transition-colors shrink-0"
                    >
                        See Full Menu
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[240px]">
                    {showcaseItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                                "group relative flex flex-col justify-end p-8 sm:p-10 rounded-[2rem] overflow-hidden",
                                "border border-white/10 hover:border-white/30 transition-all duration-500",
                                "hover:shadow-2xl hover:shadow-pink-500/20 active:scale-[0.98]",
                                item.span
                            )}
                        >
                            {/* Animated Gradient Background */}
                            <div
                                className={cn(
                                    "absolute inset-0 bg-linear-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500",
                                    item.color
                                )}
                            />
                            <div className="absolute inset-0 bg-neutral-950/60 group-hover:bg-neutral-950/40 transition-colors duration-500" />

                            {/* Optional Pattern Overlay */}
                            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

                            {/* Badges */}
                            {item.badge && (
                                <div className="absolute top-8 left-8">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-widest shadow-xl">
                                        {item.icon && <item.icon className="w-3.5 h-3.5 text-white" />}
                                        {item.badge}
                                    </span>
                                </div>
                            )}

                            {/* Hover Icon (Top Right) */}
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                <ArrowRight className="w-5 h-5 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white/70 font-bold uppercase tracking-widest text-sm mb-2">
                                    {item.tagline}
                                </p>
                                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden sm:block">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
