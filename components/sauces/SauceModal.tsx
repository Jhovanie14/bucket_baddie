"use client";

import { X, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Sauce } from "@/lib/sauces-data";
import { HeatIndicator } from "./HeatIndicator";

interface SauceModalProps {
  sauce: Sauce | null;
  onClose: () => void;
}

export function SauceModal({ sauce, onClose }: SauceModalProps) {
  if (!sauce) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-lg rounded-3xl overflow-hidden",
          "bg-neutral-900 border border-white/10 shadow-2xl",
          "animate-in fade-in zoom-in-95 duration-200"
        )}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-white/80" />
        </button>

        {/* Header gradient */}
        <div
          className={cn(
            "h-40 bg-gradient-to-br flex items-center justify-center",
            sauce.color
          )}
        >
          <Droplets className="w-16 h-16 text-white/30" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-white">
                {sauce.name}
              </h2>
              <p className="text-sm text-white/50 mt-1">
                {sauce.tagline}
              </p>
            </div>
            <HeatIndicator heat={sauce.heat} />
          </div>

          <p className="text-sm text-white/60 leading-relaxed">
            {sauce.description}
          </p>

          {/* Ingredients */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-2">
              Key Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {sauce.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Pairs with */}
          <div>
            <h4 className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-2">
              Pairs Best With
            </h4>
            <div className="flex flex-wrap gap-2">
              {sauce.pairsWith.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-400 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
