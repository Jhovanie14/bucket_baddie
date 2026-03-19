"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { href: "/menu", label: "Menu" },
    { href: "/sauces", label: "Sauces" },
    { href: "/location", label: "Location" },
];

export default function NavLinks({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <nav className={cn("flex items-center gap-1", className)}>
            {links.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "relative px-4 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-lg",
                            "hover:text-pink-400 ",
                            isActive
                                ? "text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-8 after:bg-pink-400 after:rounded-full after:content-['']"
                                : "text-white/70"
                        )}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
