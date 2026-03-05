import Image from "next/image";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Sauce } from "@/lib/sauces-data";

export default function SauceGridCard({ sauce }: { sauce: Sauce }) {
    return (
        <div
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl",
                "bg-white/[0.02] border border-white/10 p-6 sm:p-8",
                "hover:bg-white/[0.04] hover:shadow-2xl transition-all duration-500 hover:shadow-[color(display-p3_1_0_0)]/10"
            )}
        >
            {/* Background Glow */}
            <div
                className={cn(
                    "absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2",
                    "bg-gradient-to-br",
                    sauce.color
                )}
            />

            {/* Header Info */}
            <div className="relative z-10 flex justify-between items-start gap-4 mb-6">
                <div>
                    <h3 className={cn(
                        "text-2xl sm:text-3xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r",
                        sauce.color
                    )}>
                        {sauce.name}
                    </h3>
                    <p className="text-white/80 font-bold uppercase tracking-widest text-xs">
                        {sauce.tagline}
                    </p>
                </div>

                {/* Heat Indicator */}
                <div className="flex flex-col items-end gap-1 shrink-0">
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Flame
                                key={i}
                                className={cn(
                                    "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110",
                                    i < sauce.heat
                                        ? "fill-current text-current"
                                        : "text-white/10",
                                    i < sauce.heat && sauce.heat === 1 && "text-emerald-400",
                                    i < sauce.heat && sauce.heat === 2 && "text-yellow-400",
                                    i < sauce.heat && sauce.heat === 3 && "text-orange-400",
                                    i < sauce.heat && sauce.heat === 4 && "text-red-500",
                                    i < sauce.heat && sauce.heat === 5 && "text-red-700 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"
                                )}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">
                        Level {sauce.heat} Heat
                    </span>
                </div>
            </div>

            {/* Main Description */}
            <p className="relative z-10 text-white/60 leading-relaxed mb-8 flex-1">
                {sauce.description}
            </p>

            {/* Footer Info (Ingredients / Pairings) */}
            <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
                <div>
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block mb-2">
                        Base Ingredients
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {sauce.ingredients.map(ing => (
                            <span key={ing} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-white/80">
                                {ing}
                            </span>
                        ))}
                    </div>
                </div>

                {sauce.pairsWith && (
                    <div>
                        <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block mb-1">
                            Perfect Pairing
                        </span>
                        <p className="text-sm font-medium text-white/90">
                            {sauce.pairsWith.join(", ")}
                        </p>
                    </div>
                )}
            </div>

        </div>
    );
}
