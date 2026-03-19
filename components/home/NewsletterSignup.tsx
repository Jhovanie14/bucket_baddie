"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        
        try {
            const response = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Subscription failed");
            }

            setStatus("success");
            setEmail("");
            // Success state remains for 3 seconds before resetting to idle
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("Newsletter signup error:", error);
            setStatus("idle");
            // Optionally add an error state/toast here if desired
            alert(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    };

    return (
        <section className="relative py-16 sm:py-24 overflow-hidden border-t border-white/5 bg-neutral-950">
            {/* Decorative Background Elements */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-pink-500/10 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                {/* Subtle Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-400 mb-8 backdrop-blur-md">
                    <Sparkles className="w-4 h-4" />
                    Join the Cult
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
                    Get the <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-white">Secret Menu.</span>
                </h2>

                <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto font-medium mb-12">
                    Drop your email to get exclusive access to underground drops, secret sauces, and crazy combo deals before anyone else. No spam, just pure drip.
                </p>

                {/* Form Container */}
                <form
                    onSubmit={handleSubmit}
                    className="relative max-w-md mx-auto group"
                >
                    {/* Subtle glow border that flares on focus-within */}
                    <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-blue-500 rounded-full blur opacity-25 group-focus-within:opacity-75 transition duration-500" />

                    <div className="relative flex items-center bg-neutral-900 border border-white/10 rounded-full overflow-hidden p-1 shadow-2xl">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            disabled={status !== "idle"}
                            className="flex-1 bg-transparent border-none text-white px-6 py-4 outline-none placeholder:text-white/30 font-medium disabled:opacity-50"
                        />

                        <button
                            type="submit"
                            disabled={status !== "idle"}
                            className={cn(
                                "flex items-center justify-center w-12 h-12 sm:w-auto sm:px-8 sm:py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300",
                                status === "success"
                                    ? "bg-emerald-500 text-black"
                                    : "bg-white text-black hover:bg-pink-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                            )}
                        >
                            {status === "loading" ? (
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            ) : status === "success" ? (
                                "Joined!"
                            ) : (
                                <>
                                    <span className="hidden sm:inline">Subscribe</span>
                                    <Send className="w-4 h-4 sm:hidden" />
                                </>
                            )}
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-[10px] sm:text-xs text-white/30 uppercase tracking-widest font-bold">
                    By subscribing, you agree to secure the bag.
                </p>
            </div>
        </section>
    );
}
