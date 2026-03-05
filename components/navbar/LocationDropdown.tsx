"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LocationDropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    /* Close on outside click */
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    const address = "10410 S Main St, Houston, TX 77025";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen((p) => !p)}
                aria-expanded={open}
                aria-label="Location"
                className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                    "hover:bg-white/10 active:scale-95",
                    open ? "bg-white/15 text-amber-400" : "text-white/80"
                )}
            >
                <MapPin className="w-5 h-5" />
            </button>

            {/* Dropdown */}
            <div
                className={cn(
                    "absolute right-0 top-[calc(100%+8px)] z-50 w-72 origin-top-right",
                    "rounded-2xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-2xl shadow-black/40",
                    "transition-all duration-200",
                    open
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                )}
            >
                <div className="p-5 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-400/15">
                            <MapPin className="w-4 h-4 text-amber-400" />
                        </div>
                        <h3 className="text-sm font-semibold text-white">Our Location</h3>
                    </div>

                    {/* Address */}
                    <p className="text-sm leading-relaxed text-white/60">{address}</p>

                    {/* CTA */}
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold",
                            "bg-gradient-to-r from-amber-500 to-orange-500 text-black",
                            "hover:from-amber-400 hover:to-orange-400 active:scale-[0.98] transition-all duration-200",
                            "shadow-lg shadow-amber-500/20"
                        )}
                    >
                        <Navigation className="w-4 h-4" />
                        Take Me There
                    </a>
                </div>
            </div>
        </div>
    );
}
