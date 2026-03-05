"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Phone, Navigation, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/sauces", label: "Sauces" },
  { href: "/location", label: "Location" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Close on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const address = "10410 S Main St, Houston, TX 77025";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const phoneNumber = "(323) 555-0199";
  const phoneHref = "tel:+13235550199";

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={cn(
          "md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
          "hover:bg-white/10 active:scale-95",
          open ? "text-amber-400 bg-white/15" : "text-white/80"
        )}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 w-screen h-[100dvh] bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-[100dvh] w-[80vw] max-w-sm",
          "bg-neutral-950 border-l border-white/10 shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-5 pt-5 pb-2">
          <span className="text-xs text-white/40 uppercase tracking-widest font-medium">
            Navigation
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-3 mt-4">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200",
                  isActive
                    ? "bg-pink-400/10 text-pink-400"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {label}
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive ? "text-pink-400/60" : "text-white/20"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-5 my-5 h-px bg-white/10" />

        {/* Contact section */}
        <div className="px-5 space-y-5">
          {/* Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-400/15">
                <MapPin className="w-4 h-4 text-pink-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">Location</h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed pl-10">
              {address}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold",
                "bg-pink-500 text-white",
                "hover:from-pink-400 hover:to-white active:scale-[0.98] transition-all duration-200",
                "shadow-lg shadow-pink-500/20"
              )}
            >
              <Navigation className="w-4 h-4" />
              Take Me There
            </a>
          </div>

          {/* Phone */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-400/15">
                <Phone className="w-4 h-4 text-pink-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">Call Us</h4>
            </div>
            <a
              href={phoneHref}
              className="block text-lg font-bold text-white hover:text-pink-400 transition-colors pl-10"
            >
              {phoneNumber}
            </a>
            <div className="pl-10 space-y-0.5">
              <p className="text-xs text-white/40">Mon – Sat: 8 AM – 6 PM</p>
              <p className="text-xs text-white/40">Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
