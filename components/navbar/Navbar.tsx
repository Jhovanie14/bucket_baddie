import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import LocationDropdown from "./LocationDropdown";
import PhoneDropdown from "./PhoneDropdown";
import MobileMenu from "./MobileMenu";

/**
 * Navbar — Server Component
 * Renders the three-column layout: Logo | NavLinks | Actions.
 * All interactivity is pushed to tiny client sub-components.
 */
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl supports-backdrop-filter:bg-neutral-950/60 py-12">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* ── Left: Logo ── */}
                <Link
                    href="/"
                    className="group flex items-center shrink-0"
                >
                    <Image
                        src="/logo/bucketlogo.png"
                        alt="Bucket Baddie"
                        width={240}
                        height={96}
                        priority
                        style={{ width: "auto", height: "96px" }}
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* ── Middle: Nav Links (desktop only) ── */}
                <NavLinks className="hidden md:flex" />

                {/* ── Right: Actions ── */}
                <div className="flex items-center gap-1">
                    {/* Desktop dropdowns */}
                    <div className="hidden md:flex items-center gap-1">
                        <LocationDropdown />
                        <PhoneDropdown />
                    </div>

                    {/* Mobile hamburger */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
