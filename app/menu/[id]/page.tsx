import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMenuItemById, getMenu } from "@/lib/menu-data";
import { ChevronRight } from "lucide-react";
import ProductPageClient from "@/components/menu/ProductPageClient";
import ProductTabs from "@/components/menu/ProductTabs";
import RelatedProducts from "@/components/menu/RelatedProducts";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id;
    const product = await getMenuItemById(id);

    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} | Bucket Baddie`,
        description: product.description,
    };
}

export async function generateStaticParams() {
    const items = await getMenu();
    return items.map((item) => ({
        id: item.id,
    }));
}

export default async function ProductPage({ params }: Props) {
    const id = (await params).id;
    const product = await getMenuItemById(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-neutral-950 pb-24">
            {/* Hero Header */}
            <div className="relative w-full h-75 md:h-100 flex flex-col items-center justify-center text-center px-4 overflow-hidden group">
                <div className="absolute inset-0 bg-[#111111] border-b border-white/5" />
                <div className="absolute inset-x-0 top-0 h-full opacity-10 bg-[url('/textures/noise.png')] mix-blend-overlay" />

                <div className="relative z-20 space-y-6 pt-16">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white italic tracking-tighter uppercase whitespace-pre-wrap">
                        PRODUCT <span className="text-white/20 group-hover:text-pink-500 transition-colors duration-500">SINGLE</span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest">
                        <Link href="/menu" className="text-pink-500 cursor-pointer hover:underline">Menu</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                        <span className="text-white/40">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <ProductPageClient item={product} />

                {/* Tabs Section */}
                <div className="mt-20 lg:mt-32">
                    <ProductTabs item={product} />
                </div>

                {/* Related Products */}
                <div className="mt-20 lg:mt-32 border-t border-white/5 pt-20 lg:pt-32">
                    <div className="text-center space-y-4 mb-12">
                        <span className="px-4 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-[10px] font-black uppercase tracking-widest">
                            Crispy, Every Bite Taste
                        </span>
                        <h2 className="text-4xl sm:text-6xl font-black text-white italic tracking-tighter uppercase">
                            Related <span className="text-white/20">Products</span>
                        </h2>
                    </div>
                    <RelatedProducts currentId={product.id} category={product.category} />
                </div>
            </div>
        </div>
    );
}
