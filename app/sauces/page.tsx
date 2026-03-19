import type { Metadata } from "next";
import { getSauces } from "@/lib/sauces-data";
import SaucesClient from "@/components/sauces/SaucesClient";

export const metadata: Metadata = {
    title: "Signature Sauces | Bucket Baddie",
    description: "Six house-made sauces from zero heat to nuclear. Find your perfect drip.",
};

export default async function SaucesPage() {
    const sauces = await getSauces();

    return (
        <section className="min-h-screen pb-24">
            {/* Sauces Hero Header */}
            <div className="relative w-full h-80 md:h-100 flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-8 sm:mb-16">
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-950 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Animated Glows */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="relative z-20 space-y-6 max-w-4xl mx-auto pt-16">
                    <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-bold uppercase tracking-widest backdrop-blur-md shadow-2xl shadow-pink-500/10">
                        The Flavor Lab
                    </span>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1]">
                        Find Your <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-blue-500">Perfect Drip.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto font-medium">
                        We don't do boring. Six signature house-made sauces. From our zero-heat Garlic Flex to the face-melting Ghost Sauce. Dial in your heat and get tossing.
                    </p>
                </div>
            </div>

            {/* Main Interactive Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
                <SaucesClient initialSauces={sauces} />
            </div>
        </section>
    );
}
