"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Sauce } from "@/lib/sauces-data";
import { HeatIndicator } from "./HeatIndicator";
import { SauceModal } from "./SauceModal";
import Image from "next/image";

interface SaucesCarouselProps {
  sauces: Sauce[];
  autoplayInterval?: number;
}

export default function SaucesCarousel({ 
  sauces, 
  autoplayInterval = 5000 
}: SaucesCarouselProps) {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<Sauce | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const perPage = 3;
  const totalPages = Math.ceil(sauces.length / perPage);
  const visible = sauces.slice(page * perPage, page * perPage + perPage);

  const prev = useCallback(() => setPage((p) => (p - 1 + totalPages) % totalPages), [totalPages]);
  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);

  // Autoplay logic
  useEffect(() => {
    if (isPaused || selected) return;

    const timer = setInterval(() => {
      next();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [next, autoplayInterval, isPaused, selected]);

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel */}
      <div className="relative">
        {/* Navigation arrows */}
        {totalPages > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous sauces"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all hidden sm:flex"
            >
              <ChevronLeft className="w-5 h-5 text-white/70" />
            </button>
            <button
              onClick={next}
              aria-label="Next sauces"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all hidden sm:flex"
            >
              <ChevronRight className="w-5 h-5 text-white/70" />
            </button>
          </>
        )}

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((sauce) => (
            <button
              key={sauce.id}
              onClick={() => setSelected(sauce)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl text-left",
                "bg-white/[0.03] border border-white/10",
                "hover:bg-white/[0.07] hover:border-white/20 hover:shadow-2xl",
                "active:scale-[0.98] transition-all duration-300 cursor-pointer"
              )}
            >
              {/* Top gradient bar */}
              <div
                className={cn(
                  "h-28 bg-gradient-to-br flex items-center justify-center",
                  sauce.color
                )}
              >
                {
                    sauce.image ? (
                        <Image src={sauce.image} alt={sauce.name} width={100} height={100} />
                    ) : (
                        <Droplets className="w-10 h-10 text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all duration-300" />
                    )
                }
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {sauce.name}
                  </h3>
                  <HeatIndicator heat={sauce.heat} />
                </div>
                <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                  {sauce.tagline}
                </p>
                <span className="text-xs text-pink-400/70 font-semibold uppercase tracking-widest mt-auto pt-2">
                  Tap for details →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === page
                    ? "w-8 bg-gradient-to-r from-pink-500 to-white"
                    : "w-2 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <SauceModal sauce={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
