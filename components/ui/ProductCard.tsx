"use client";

import React from "react";
import Image from "next/image";
import { Heart, Plus, ShoppingBag } from "lucide-react";
import { useApp } from "@/components/context/AppContext";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  priceStr: string;
  category: string;
  currency: "NPR" | "USD";
  badgeType?: "wishlist" | "add-to-cart";
}

export function ProductCard({
  id,
  image,
  title,
  price,
  priceStr,
  category,
  currency,
  badgeType = "wishlist",
}: ProductCardProps) {
  const { wishlist, toggleWishlist, addToCart } = useApp();
  const isWishlisted = wishlist.includes(id);

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (badgeType === "wishlist") {
      toggleWishlist(id);
    } else {
      addToCart({
        id,
        title,
        price,
        priceStr,
        image,
        category,
        currency,
      });
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden bg-[#F4EFE6] border border-transparent hover:border-[#C5A059]/20 transition-all duration-500 shadow-sm hover:shadow-md">
      {/* Image Container with Zoom effect */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          priority={false}
        />
        
        {/* Floating Action Button (Heart or Plus) */}
        <button
          onClick={handleAction}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#3B2F2F] shadow-sm hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 group/btn"
          aria-label={badgeType === "wishlist" ? "Toggle Wishlist" : "Quick Add to Cart"}
        >
          {badgeType === "wishlist" ? (
            <Heart
              className={`h-4 w-4 transition-colors duration-300 ${
                isWishlisted
                  ? "fill-[#C5A059] text-[#C5A059]"
                  : "text-[#3B2F2F] group-hover/btn:text-[#C5A059]"
              }`}
            />
          ) : (
            <Plus className="h-4 w-4 transition-colors duration-300 text-[#3B2F2F] group-hover/btn:text-[#C5A059]" />
          )}
        </button>

        {/* Hover quick add overlay (optional overlay for desktop) */}
        {badgeType === "wishlist" && (
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/40 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart({ id, title, price, priceStr, image, category, currency });
              }}
              className="flex w-full items-center justify-center gap-2 bg-[#C5A059] text-white py-2 text-xs font-medium uppercase tracking-widest hover:bg-[#B59049] transition-colors"
            >
              <ShoppingBag className="h-3 w-3" />
              Quick Shop
            </button>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="flex flex-1 flex-col items-center text-center p-4 md:p-5 bg-[#F4EFE6]">
        <h3 className="font-serif text-[#3B2F2F] text-sm md:text-base line-clamp-1 group-hover:text-[#C5A059] transition-colors duration-300 mb-2">
          {title}
        </h3>
        <p className="text-xs md:text-sm font-semibold text-[#3B2F2F] tracking-wide">
          {priceStr}
        </p>
      </div>
    </div>
  );
}
