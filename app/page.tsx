import Link from "next/link";
import { getSauces } from "@/lib/sauces-data";
import { getMenu, menuCategories } from "@/lib/menu-data";

import SaucesCarousel from "@/components/sauces/SaucesCarousel";
import Marquee from "@/components/home/Marquee";
import MenuShowcase from "@/components/home/MenuShowcase";
import PopularItems from "@/components/home/PopularItems";
import PromoBanners from "@/components/home/PromoBanners";
import HomeCategoryTabs from "@/components/home/HomeCategoryTabs";
import QualityPromise from "@/components/home/QualityPromise";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export const metadata = {
  title: "Bucket Baddie — Buckets Built to Go Viral",
  description:
    "Halal wings, tenders, and loaded fries stacked in a custom neon bucket. Pull up, hit record, and let the Baddie bucket do the flexing.",
};

export default async function HomePage() {
  const [sauces, menuItems] = await Promise.all([
    getSauces(),
    getMenu()
  ]);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/bucket-video.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.08]">
            <span className="block text-white">
              Buckets Built to Go{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">
                Viral.
              </span>
            </span>
            <span className="block mt-1 text-white">
              Wings Built to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Disappear.
              </span>
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Halal wings, tenders, and loaded fries stacked in a custom neon
            bucket. Pull up, hit record, and let the Baddie bucket do the
            flexing.
          </p>

          <Link
            href="/menu"
            prefetch={true}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest bg-pink-500 text-black shadow-2xl shadow-pink-500/25 hover:from-pink-400 hover:to-white hover:shadow-pink-500/40 active:scale-[0.97] transition-all duration-300"
          >
            View Menu
          </Link>
        </div>
        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
      </section>

      {/* ── Signature Sauces Section ── */}
      <section className="relative bg-neutral-950 py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-400 font-bold uppercase tracking-widest mb-4">
              Drip Different
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Signature{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white">
                Sauces
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
              Six house-made sauces from mild to nuclear. Each one crafted to
              make your bucket hit different.
            </p>
          </div>

          {/* Carousel */}
          <SaucesCarousel sauces={sauces} />
        </div>
      </section>

      {/* ── Marquee Section ── */}
      <Marquee />

      {/* ── Popular Items Overview ── */}
      <PopularItems items={menuItems} />

      {/* ── Promotional Deals ── */}
      <PromoBanners />

      {/* ── Menu Bento Showcase ── */}
      <MenuShowcase />

      {/* ── Interactive Category Tabs ── */}
      {/* <HomeCategoryTabs initialItems={menuItems} categories={menuCategories} /> */}

      {/* ── Quality Promise & Delivery text ── */}
      <QualityPromise />

      {/* ── Newsletter Subscription Funnel ── */}
      <NewsletterSignup />

    </>
  );
}
