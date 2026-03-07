import { getMenu } from "@/lib/menu-data";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
    currentId: string;
    category: string;
}

export default async function RelatedProducts({ currentId, category }: RelatedProductsProps) {
    const allItems = await getMenu();

    // Filter for products in the same category, excluding the current one, and limit to 4
    const related = allItems
        .filter((item) => item.category === category && item.id !== currentId)
        .slice(0, 4);

    if (related.length === 0) {
        return (
            <div className="text-center py-20 px-4 rounded-[40px] bg-neutral-900/30 border border-white/5">
                <p className="text-white/20 font-black italic uppercase tracking-widest">No related products found in this category.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((product) => (
                <ProductCard key={product.id} item={product} />
            ))}
        </div>
    );
}
