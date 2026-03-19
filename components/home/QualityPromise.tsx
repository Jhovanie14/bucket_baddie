import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Timer } from "lucide-react";

const promises = [
    {
        icon: ShieldCheck,
        title: "100% Zabiha Halal",
        description: "Every piece of chicken we serve is strictly zabiha halal. No compromises, no questions.",
    },
    {
        icon: Timer,
        title: "Double-Fried Crunch",
        description: "Cooked to order. We double-fry for a shatter-glass crunch that holds up all the way home.",
    },
    {
        icon: CheckCircle2,
        title: "House-Made Daily",
        description: "From our Buttermilk Ranch to the Ghost Sauce, everything is crafted fresh in-house.",
    },
];

export default function QualityPromise() {
    return (
        <section className="bg-neutral-950 py-20 sm:py-32 relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Image / Visuals */}
                    <div className="relative w-full aspect-4/5 sm:aspect-square lg:aspect-4/5 rounded-[3rem] overflow-hidden bg-neutral-900 border border-white/10 group">
                        <div className="absolute inset-0 bg-pink-500/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <Image
                            src="/hero/bucket-placeholder.png" // Using an existing placeholder or noise
                            alt="Freshly fried chicken"
                            fill
                            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-40 mix-blend-luminosity"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Overlay Badge */}
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="bg-neutral-950/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl max-w-70 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Halal Certified</h4>
                                        <p className="text-emerald-400/80 text-xs uppercase tracking-widest font-semibold mt-0.5">Verified</p>
                                    </div>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    We maintain strict adherence to dietary guidelines without sacrificing flavor.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-12">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-bold uppercase tracking-widest mb-6">
                                Our Promise
                            </span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                                No Cap.<br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-pink-600">
                                    Just Quality.
                                </span>
                            </h2>
                            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                                We didn't start Bucket Baddie to be another fast food joint. We started it because we were tired of choosing between zabiha halal and top-tier flavor.
                            </p>
                        </div>

                        {/* List of Promises */}
                        <div className="space-y-8">
                            {promises.map((promise, i) => (
                                <div key={i} className="flex items-start gap-5">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/3 border border-white/10 flex items-center justify-center mt-1">
                                        <promise.icon className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {promise.title}
                                        </h3>
                                        <p className="text-white/50 leading-relaxed max-w-sm">
                                            {promise.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-neutral-950 font-bold uppercase tracking-widest hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-xl"
                            >
                                Experience the Crunch
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
