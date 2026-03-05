import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Vibe */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-white tracking-tight">
              Bucket <span className="text-pink-500">Baddie</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Buckets &middot; Drip &middot; Vibes &middot; Houston, TX
            </p>
          </div>

          {/* Column 2: Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Location
            </h4>
            <div className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
              <MapPin className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
              <p>
                123 Baddie Blvd<br />
                Houston, TX 77002
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/menu" className="text-white/60 text-sm hover:text-pink-400 transition-colors w-fit">
                Menu
              </Link>
              <Link href="/sauces" className="text-white/60 text-sm hover:text-pink-400 transition-colors w-fit">
                Signature Sauces
              </Link>
              <Link href="/location" className="text-white/60 text-sm hover:text-pink-400 transition-colors w-fit">
                Location & Hours
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              Contact & Socials
            </h4>
            <div className="space-y-3">
              <a href="tel:+18005550199" className="flex items-center gap-3 text-white/60 text-sm hover:text-pink-400 transition-colors w-fit">
                <Phone className="w-4 h-4 text-pink-500" />
                (800) 555-0199
              </a>
              <a href="mailto:hello@bucketbaddie.com" className="flex items-center gap-3 text-white/60 text-sm hover:text-pink-400 transition-colors w-fit">
                <Mail className="w-4 h-4 text-pink-500" />
                hello@bucketbaddie.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10 space-y-4 text-center">
          <p className="text-white/40 text-xs tracking-wider uppercase">
            &copy; 2025 Bucket Baddie. All rights reserved.
          </p>
          <div className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Halal Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
