"use client";

import { useState } from "react";
import type { MenuItem, MenuItemOption } from "@/lib/menu-data";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductPageClient({ item }: { item: MenuItem }) {
    const [selectedOption, setSelectedOption] = useState<MenuItemOption | null>(
        item.options?.[0] ?? null
    );

    const handleOptionChange = (option: MenuItemOption | null) => {
        setSelectedOption(option);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ProductGallery item={item} onOptionChange={handleOptionChange} selectedOption={selectedOption} />
            <ProductInfo
                item={item}
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
            />
        </div>
    );
}
