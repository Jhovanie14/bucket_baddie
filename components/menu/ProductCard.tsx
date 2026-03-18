"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/lib/menu-data";

interface ProductCardProps {
  item: MenuItem;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ item, viewMode = "grid" }: ProductCardProps) {
  if (viewMode === "list") {
    return (
      <div className="group relative flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100">
        {/* Image */}
        <Link href={`/menu/${item.id}`} className="relative w-36 sm:w-48 shrink-0 bg-neutral-50 overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center italic text-[10px] text-black/10 font-black bg-neutral-100">
              BADDIE PIC
            </div>
          )}
        </Link>

        {/* Content */}
        <Link href={`/menu/${item.id}`} className="flex flex-1 flex-col justify-between p-5 hover:bg-neutral-50 transition-colors">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-black text-neutral-900 uppercase tracking-tighter italic leading-tight">
                {item.name}
              </h3>
              <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-lg bg-[#FFB800]/10 text-[#FFB800] text-[10px] font-black uppercase tracking-tight">
                -5% OFF
              </span>
            </div>
            <p className="text-xs font-bold text-black/40 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <p className="text-sm font-black text-[#FFB800]">
              ${item.price.toFixed(2)}{" "}
              <span className="text-black/20 line-through font-bold text-xs ml-1">
                ${(item.price * 1.05).toFixed(2)}
              </span>
            </p>
          </div>
        </Link>

      </div>
    );
  }

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
      {/* Image */}
      {item.options && item.options.length > 0 ? (
        <div className="grid grid-cols-2 w-full">
          {item.options.map((option) => (
            <Link key={option.label} href={`/menu/${item.id}`} className="relative aspect-square w-full overflow-hidden bg-neutral-50 group/opt">
              {option.image ? (
                <>
                  <Image
                    src={option.image}
                    alt={`${item.name} ${option.label}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/opt:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                    <p className="text-[9px] font-black text-white uppercase tracking-wider text-center">
                      {option.label}
                    </p>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center italic text-[10px] text-black/10 font-black bg-neutral-100">
                  {option.label}
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <Link href={`/menu/${item.id}`} className="relative aspect-4/3 w-full overflow-hidden bg-neutral-50">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center italic text-[10px] text-black/10 font-black bg-neutral-100">
              BADDIE PIC
            </div>
          )}
        </Link>
      )}

      {/* Content */}
      <Link href={`/menu/${item.id}`} className="flex flex-col items-center text-center p-6 space-y-3 bg-white hover:bg-neutral-50 transition-colors">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFB800]/10 text-[#FFB800] text-[10px] font-black uppercase tracking-tighter">
          -5% OFF
        </div>

        <div className="space-y-1">
          <p className="text-[10px] font-black text-[#FFB800] uppercase tracking-widest">
            ${item.price.toFixed(2)}{" "}
            <span className="text-black/20 line-through ml-1">${(item.price * 1.05).toFixed(2)}</span>
          </p>
          <h3 className="text-lg font-black text-neutral-900 uppercase tracking-tighter italic leading-tight">
            {item.name}
          </h3>
        </div>

        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
          ))}
        </div>
      </Link>
    </div>
  );
}
