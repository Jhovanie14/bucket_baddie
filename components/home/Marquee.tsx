"use client";

import { Flame } from "lucide-react";

const buzzwords = [
  "100% Zabiha Halal",
  "Double Fried for the Crunch",
  "House-Made Signature Sauces",
  "Buckets Built to Go Viral",
  "Houston, TX",
  "No Cap, Just Drip",
];

export default function Marquee() {
  return (
    <div className="relative flex w-full overflow-hidden bg-pink-500 py-4 items-center border-y border-pink-400">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
      <div className="animate-marquee flex whitespace-nowrap items-center w-max">
        {/* We map the buzzwords twice (or more) to create a seamless loop */}
        {[...buzzwords, ...buzzwords, ...buzzwords, ...buzzwords].map((word, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="text-black font-black uppercase tracking-widest text-lg sm:text-xl">
              {word}
            </span>
            <Flame className="w-5 h-5 mx-6 text-black/40 fill-black/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
