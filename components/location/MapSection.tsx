"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface MapSectionProps {
    mapsUrl: string; // The embed URL for the iframe
}

export default function MapSection({ mapsUrl }: MapSectionProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full h-full min-h-100 lg:min-h-150 rounded-3xl overflow-hidden border border-white/10 relative group bg-neutral-900">

            {/* Decorative Overlays for Dark Theme / Bucket Baddie Vibe */}
            <div className="absolute inset-0 pointer-events-none border-8 border-neutral-950/20 z-20 mix-blend-overlay rounded-3xl" />
            <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-neutral-950/80 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-neutral-950/80 to-transparent pointer-events-none z-10" />

            {/* Loading State Overlay */}
            {isLoading && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-neutral-900">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-10 h-10 border-4 border-neutral-800 border-t-pink-500 rounded-full animate-spin" />
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest animate-pulse">
                            Locating the Drip...
                        </p>
                    </div>
                </div>
            )}

            {/* Embedded Map iframe 
          We apply CSS filters to the iframe to force a dark mode look even if the embedded map isn't natively dark.
      */}
            <iframe
                src={mapsUrl}
                className={cn(
                    "w-full h-full absolute inset-0 z-0 transition-opacity duration-1000",
                    isLoading ? "opacity-0" : "opacity-100",
                    // CSS Filter Magic to turn a standard map into a high-contrast dark map
                    "invert-90 hue-rotate-180 contrast-125 saturate-200"
                )}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsLoading(false)}
            />

        </div>
    );
}
