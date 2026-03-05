import { MapPin, Phone, Clock, ArrowRight, Navigation, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocationCardProps {
    type: "restaurant" | "food-truck";
    name: string;
    subtitle: string;
    address: string;
    phone: string;
    hours: { days: string; time: string }[];
    isOpen: boolean;
    accentColor: string; // e.g. "amber-500"
}

export default function LocationCard({
    type,
    name,
    subtitle,
    address,
    phone,
    hours,
    isOpen,
    accentColor,
}: LocationCardProps) {
    // Map our dynamic tailwind colors
    const bgColors: Record<string, string> = {
        "amber-500": "bg-amber-500",
        "pink-500": "bg-pink-500",
    };

    const textColors: Record<string, string> = {
        "amber-500": "text-amber-500",
        "pink-500": "text-pink-500",
    };

    const shadowColors: Record<string, string> = {
        "amber-500": "shadow-[0_0_50px_rgba(245,158,11,0.2)]",
        "pink-500": "shadow-[0_0_50px_rgba(236,72,153,0.2)]",
    };

    return (
        <div className={cn(
            "relative flex flex-col rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:scale-[1.02]",
            type === "restaurant" ? "bg-amber-500 text-black" : "bg-neutral-900 border border-white/10 text-white",
            shadowColors[accentColor]
        )}>
            {/* Glow Effect for Dark Mode Cards */}
            {type === "food-truck" && (
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none" />
            )}

            <div className="p-8 sm:p-10 flex flex-col gap-8 relative z-10">

                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-4 items-start">
                        <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                            type === "restaurant" ? "bg-black/10" : "bg-white/5"
                        )}>
                            <MapPin className={cn("w-6 h-6", type === "restaurant" ? "text-black" : textColors[accentColor])} />
                        </div>
                        <div>
                            <h2 className={cn("text-2xl sm:text-3xl font-black uppercase tracking-tight", type === "restaurant" ? "text-black" : "text-white")}>
                                {name}
                            </h2>
                            <p className={cn("text-sm font-bold tracking-widest uppercase mt-1", type === "restaurant" ? "text-black/70" : "text-white/50")}>
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-5">
                    <div className={cn("flex gap-3", type === "restaurant" ? "text-black/80" : "text-white/80")}>
                        <MapPin className="w-5 h-5 shrink-0" />
                        <p className="font-medium">{address}</p>
                    </div>

                    <div className={cn("flex gap-3", type === "restaurant" ? "text-black/80" : "text-white/80")}>
                        <Phone className="w-5 h-5 shrink-0" />
                        <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-medium hover:underline">
                            {phone}
                        </a>
                    </div>

                    <div className={cn("flex gap-3", type === "restaurant" ? "text-black/80" : "text-white/80")}>
                        <Clock className="w-5 h-5 shrink-0" />
                        <div className="space-y-2">
                            {hours.map((h, i) => (
                                <div key={i} className="text-sm">
                                    <span className="font-bold">{h.days}:</span> {h.time}
                                </div>
                            ))}

                            {/* Status Badge */}
                            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10">
                                <span className="relative flex h-2.5 w-2.5">
                                    {isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                                    <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", isOpen ? "bg-emerald-500" : "bg-red-500")}></span>
                                </span>
                                <span className={cn("text-xs font-bold uppercase tracking-widest", type === "restaurant" ? "text-black" : "text-white")}>
                                    {isOpen ? "Open Now" : "Currently Closed"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto space-y-3 pt-4">
                    <button className={cn(
                        "w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-sm transition-all duration-300",
                        type === "restaurant"
                            ? "bg-black text-white hover:bg-neutral-800"
                            : "bg-white text-black hover:bg-neutral-200"
                    )}>
                        Order Pick-up
                        <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                            "w-full py-4 flex items-center justify-center gap-2 rounded-xl border font-bold uppercase tracking-wider text-sm transition-all duration-300",
                            type === "restaurant"
                                ? "border-black/20 hover:border-black text-black"
                                : "border-white/20 hover:border-white text-white"
                        )}
                    >
                        Get Directions
                        <Navigation className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </div>
    );
}
