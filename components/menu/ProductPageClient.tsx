"use client";

import { useState } from "react";
import type { MenuItem, MenuItemOption } from "@/lib/menu-data";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductPageClient({ item }: { item: MenuItem }) {
    const [selectedOption, setSelectedOption] = useState<MenuItemOption | null>(
        item.options?.[0] ?? null
    );

    const activeImage = selectedOption?.image ?? item.image;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ProductGallery item={item} activeImage={activeImage} />
            <ProductInfo
                item={item}
                selectedOption={selectedOption}
                onOptionChange={setSelectedOption}
            />
        </div>
    );
}
