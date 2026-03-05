import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PromoBanners() {
    return (
        <section className="bg-neutral-950 py-12 sm:py-20 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

                    {/* Banner 1: Super Delicious Combo (Dark/Neutral Theme) */}
                    <div className="relative group overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/10 min-h-[320px] sm:min-h-[400px] flex items-center p-8 sm:p-12">
                        {/* Background elements */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-700" />
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

                        {/* Content */}
                        <div className="relative z-10 max-w-sm">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold uppercase tracking-widest text-xs mb-4 border border-blue-500/30">
                                Combo Deal
                            </span>
                            <h3 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-4">
                                Super <br />
                                <span className="text-blue-400">Delicious</span>
                            </h3>
                            <p className="text-white/60 mb-8 leading-relaxed max-w-xs">
                                Grab the classic Solo Bucket with any signature sauce and save 15%.
                            </p>

                            <Link
                                href="/menu"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-bold uppercase tracking-widest hover:bg-blue-400 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
                            >
                                Order Now
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Floating Image (Mocked) */}
                        <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[80%] flex items-center justify-center opacity-30 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 pointer-events-none">
                            {/* Replace with actual bucket image */}
                            <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-3xl absolute" />
                            <Flame className="w-32 h-32 text-blue-500/80 drop-shadow-2xl relative z-10" />
                        </div>
                    </div>


                    {/* Banner 2: Spicy Surprise (Brand Red/Pink Theme) */}
                    <div className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-600 to-rose-700 border border-pink-500/30 min-h-[320px] sm:min-h-[400px] flex items-center p-8 sm:p-12 shadow-2xl shadow-pink-500/10">
                        {/* Background elements */}
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-30 mix-blend-overlay" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />

                        {/* Floating Badge */}
                        <div className="absolute top-8 right-8">
                            <div className="w-16 h-16 rounded-full bg-white text-pink-600 flex flex-col items-center justify-center font-black leading-none transform rotate-12 shadow-2xl border-4 border-pink-200 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-500">
                                <span className="text-xs">Only</span>
                                <span className="text-xl">$9</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-sm mt-auto">
                            <h3 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-2 drop-shadow-lg">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-pink-200">Spicy</span><br />
                                Surprise
                            </h3>
                            <p className="text-white/90 mb-6 font-medium tracking-wide drop-shadow-md">
                                6-Piece Wings tossed in Neon Mango or Ghost Sauce.
                            </p>

                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-pink-600 font-bold uppercase tracking-widest hover:bg-neutral-100 active:scale-95 transition-all shadow-xl"
                            >
                                Claim Offer
                            </Link>
                        </div>

                        {/* Floating abstract art to mimic food image */}
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-[55%] h-full flex items-center justify-center opacity-80 transform group-hover:-translate-x-2 transition-transform duration-700 pointer-events-none">
                            <div className="w-full aspect-square border-8 border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
