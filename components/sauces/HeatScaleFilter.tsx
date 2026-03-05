"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

interface HeatScaleFilterProps {
    minHeat: number;
    maxHeat: number;
    onChange: (range: [number, number]) => void;
}

export default function HeatScaleFilter({ minHeat, maxHeat, onChange }: HeatScaleFilterProps) {
    // Use local state to maintain smooth sliding without lagging the parent component
    const [localRange, setLocalRange] = useState<[number, number]>([minHeat, maxHeat]);

    // Sync with parent props if they change externally
    useEffect(() => {
        setLocalRange([minHeat, maxHeat]);
    }, [minHeat, maxHeat]);

    const handleValueChange = (value: number[]) => {
        setLocalRange([value[0], value[1]]);
    };

    const handleValueCommit = (value: number[]) => {
        onChange([value[0], value[1]]);
    };

    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            <div className="text-center mb-8">
                <h3 className="text-[#6bbdec] font-black uppercase tracking-widest text-lg drop-shadow-[0_0_8px_rgba(107,189,236,0.3)]">
                    Heat Scale
                </h3>
            </div>

            <div className="relative pt-4 pb-8">
                {/* Section ticks */}
                <div className="absolute top-4 left-0 right-0 h-1.5 pointer-events-none">
                    {[2, 3, 4].map((tick) => (
                        <div
                            key={tick}
                            className="absolute top-1/2 -translate-y-1/2 w-[2px] h-3.5 bg-[#7a8c9e] shadow-[0_0_4px_black] z-0"
                            style={{ left: `${((tick - 1) / 4) * 100}%`, transform: "translate(-50%, -50%)" }}
                        />
                    ))}
                </div>

                <Slider
                    defaultValue={[1, 5]}
                    value={localRange}
                    onValueChange={handleValueChange}
                    onValueCommit={handleValueCommit}
                    min={1}
                    max={5}
                    step={1}
                    className="
            relative z-10 
            [&_[data-slot=slider-track]]:bg-neutral-800 
            [&_[data-slot=slider-track]]:h-2 
            [&_[data-slot=slider-range]]:bg-gradient-to-r 
            [&_[data-slot=slider-range]]:from-emerald-400 
            [&_[data-slot=slider-range]]:via-amber-400 
            [&_[data-slot=slider-range]]:to-red-500
            [&_[data-slot=slider-thumb]]:bg-[#ffb700] 
            [&_[data-slot=slider-thumb]]:border-[#cc9200] 
            [&_[data-slot=slider-thumb]]:border-2 
            [&_[data-slot=slider-thumb]]:w-6 
            [&_[data-slot=slider-thumb]]:h-6 
            sm:[&_[data-slot=slider-thumb]]:w-8 
            sm:[&_[data-slot=slider-thumb]]:h-8 
          "
                />

                {/* Labels under the track matching mockup */}
                <div className="absolute top-[calc(100%+8px)] w-full flex justify-between px-2 text-sm sm:text-base font-bold text-white/90">
                    <span className="transform -translate-x-1/2">no heat</span>
                    <span className="absolute left-1/2 -translate-x-1/2 text-center text-[#9db1c5]">
                        <span className="text-white">Neutral</span> - <span className="text-amber-500 drop-shadow-[0_0_4px_rgba(255,183,0,0.5)]">Heat</span>
                    </span>
                    <span className="transform translate-x-1/2">all the heat</span>
                </div>
            </div>
        </div>
    );
}
