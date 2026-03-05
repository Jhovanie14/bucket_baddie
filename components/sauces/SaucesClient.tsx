"use client";

import { useState, useMemo } from "react";
import HeatScaleFilter from "./HeatScaleFilter";
import SauceGridCard from "./SauceGridCard";
import type { Sauce } from "@/lib/sauces-data";

export default function SaucesClient({ initialSauces }: { initialSauces: Sauce[] }) {
    // Default bounds to show all sauces (Heat levels 1 through 5)
    const [heatRange, setHeatRange] = useState<[number, number]>([1, 5]);

    const filteredSauces = useMemo(() => {
        return initialSauces.filter(
            (sauce) => sauce.heat >= heatRange[0] && sauce.heat <= heatRange[1]
        );
    }, [initialSauces, heatRange]);

    return (
        <div className="w-full space-y-8">
            {/* Filter Section */}
            <div className="bg-neutral-900/40 rounded-[2.5rem] border border-white/5 backdrop-blur-md mb-12 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                <HeatScaleFilter
                    minHeat={heatRange[0]}
                    maxHeat={heatRange[1]}
                    onChange={setHeatRange}
                />
            </div>

            {/* Grid Results */}
            {filteredSauces.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredSauces.map((sauce) => (
                        <SauceGridCard key={sauce.id} sauce={sauce} />
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-24 px-4 text-center border border-white/5 border-dashed rounded-[3rem] bg-neutral-900/20">
                    <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mb-6">
                        <span className="text-4xl">🤔</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">No sauces found</h3>
                    <p className="text-white/50 max-w-sm">
                        We don't have any sauces in that exact heat range. Try expanding the slider to see more options.
                    </p>
                    <button
                        onClick={() => setHeatRange([1, 5])}
                        className="mt-8 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
                    >
                        Reset Heat Scale
                    </button>
                </div>
            )}
        </div>
    );
}
