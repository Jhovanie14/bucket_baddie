"use client";

import { useState, useRef, useEffect } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PhoneDropdown() {
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

  const phoneNumber = "(323) 555-0199";
  const phoneHref = "tel:+13235550199";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-label="Phone"
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
          "hover:bg-white/10 active:scale-95",
          open ? "bg-white/15 text-amber-400" : "text-white/80"
        )}
      >
        <Phone className="w-5 h-5" />
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
              <Phone className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
          </div>

          {/* Info */}
          <div className="space-y-1">
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium">
              Call or Text
            </p>
            <a
              href={phoneHref}
              className="block text-lg font-bold text-white hover:text-amber-400 transition-colors"
            >
              {phoneNumber}
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium">
              Hours
            </p>
            <p className="text-sm text-white/70">Mon – Sat: 8 AM – 6 PM</p>
            <p className="text-sm text-white/70">Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
