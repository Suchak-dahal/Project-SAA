"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { SlidersHorizontal, ChevronDown, Award, Gift, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { ProductCard } from "@/components/ui/ProductCard";
import { ValuePropBanner } from "@/components/ui/ValuePropBanner";

interface JewelryProduct {
  id: string;
  title: string;
  price: number;
  priceStr: string;
  image: string;
  category: string; // e.g. "Necklace", "Earrings", "Ring", "Bracelet", "Anklet"
  dateAdded: string;
}

export default function JewelryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filterPills = ["All", "Necklaces", "Earrings", "Rings", "Bracelets", "Anklets"];

  const products: JewelryProduct[] = [
    {
      id: "jewel-1",
      title: "Pearl Necklace",
      price: 4850,
      priceStr: "NPR 4,850.00",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600",
      category: "Necklaces",
      dateAdded: "2026-08-01",
    },
    {
      id: "jewel-2",
      title: "Classic Hoop Earrings",
      price: 2250,
      priceStr: "NPR 2,250.00",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=600",
      category: "Earrings",
      dateAdded: "2026-08-05",
    },
    {
      id: "jewel-3",
      title: "Floral Pendant",
      price: 3150,
      priceStr: "NPR 3,150.00",
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600",
      category: "Necklaces",
      dateAdded: "2026-07-25",
    },
    {
      id: "jewel-4",
      title: "Stackable Rings",
      price: 2950,
      priceStr: "NPR 2,950.00",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600",
      category: "Rings",
      dateAdded: "2026-07-20",
    },
    {
      id: "jewel-5",
      title: "Dainty Bracelet",
      price: 2150,
      priceStr: "NPR 2,150.00",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600",
      category: "Bracelets",
      dateAdded: "2026-07-15",
    },
    {
      id: "jewel-6",
      title: "Elegant Anklet",
      price: 1750,
      priceStr: "NPR 1,750.00",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600",
      category: "Anklets",
      dateAdded: "2026-07-10",
    },
  ];

  const jewelryValueProps = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Premium Quality",
      desc: "Carefully selected metals and ethically sourced gems.",
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Perfect Gift",
      desc: "Delivered in a beautiful brand box, complete with gift wrapping.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Secure Shopping",
      desc: "Your transaction details are fully encrypted and safe.",
    },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter
    if (activeFilter !== "All") {
      result = result.filter(
        (product) => product.category.toLowerCase() === activeFilter.toLowerCase()
      );
    }

    // Sort
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else {
      // Featured / Default: Newest
      result.sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    }

    return result;
  }, [activeFilter, sortBy]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />

      <main className="flex-grow">
        {/* Split Hero Section */}
        <section className="relative bg-[#FBF9F5] border-b border-[#C5A059]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center py-12 md:py-16">
              {/* Left Column Content */}
              <div className="space-y-6 text-center lg:text-left max-w-md mx-auto lg:mx-0 lg:pr-8">
                <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#3B2F2F]">
                  Jewelry <br /> Collection
                </h1>
                <div className="h-[1px] w-16 bg-[#C5A059] mx-auto lg:mx-0"></div>
                <p className="text-sm text-[#3B2F2F]/80 leading-relaxed font-sans font-light">
                  Timeless beauty, crafted for every moment. Explore delicate, gold-plated botanical and floral designs designed to add a warm gold accent to your daily elegance.
                </p>
                <button
                  onClick={() => {
                    const gridElement = document.getElementById("jewelry-collection-section");
                    gridElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center font-sans font-medium tracking-widest bg-[#C5A059] text-white hover:bg-[#B59049] px-8 py-3.5 text-xs uppercase cursor-pointer transition-all duration-300 transform hover:-translate-y-[1px]"
                >
                  Explore Now
                </button>
              </div>

              {/* Right Column Image inside Archway */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] max-h-[550px] overflow-hidden bg-[#F4EFE6] rounded-t-full">
                <Image
                  src="/images/jewelry_hero.png"
                  alt="Jewelry Collection Campaign"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collection Grid Section */}
        <section id="jewelry-collection-section" className="py-16 md:py-24 bg-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold mb-2">
                Our Collection
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3B2F2F] tracking-tight">
                Timeless Masterpieces
              </h2>
              <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-4"></div>
            </div>

            {/* Filters and Sorting bar */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-t border-b border-[#C5A059]/10 py-6 mb-12">
              {/* Horizontal Scrollable Pills */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-3 md:pb-0 scrollbar-none">
                {filterPills.map((pill) => (
                  <button
                    key={pill}
                    onClick={() => setActiveFilter(pill)}
                    className={`px-5 py-2 text-xs rounded-full font-sans tracking-wide border whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      activeFilter === pill
                        ? "bg-[#C5A059] text-white border-[#C5A059]"
                        : "bg-transparent text-[#3B2F2F]/80 border-[#C5A059]/20 hover:border-[#C5A059]"
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>

              {/* Sorting Dropdown */}
              <div className="flex items-center justify-between md:justify-end gap-6">
                <div className="flex items-center gap-2 text-xs font-sans text-[#3B2F2F]/80">
                  <SlidersHorizontal className="h-4.5 w-4.5 text-[#C5A059]" />
                  <span>Filter</span>
                </div>

                <div className="relative flex items-center gap-1.5 text-xs font-sans text-[#3B2F2F]/80">
                  <span>Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent pr-6 font-semibold text-[#3B2F2F] focus:outline-none cursor-pointer"
                  >
                    <option value="Featured">Featured</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-0 h-3.5 w-3.5 text-[#3B2F2F]/60 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  priceStr={product.priceStr}
                  image={product.image}
                  category={product.category}
                  currency="NPR"
                  badgeType="wishlist"
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-sm font-sans text-[#3B2F2F]/60">
                  No items found matching the selected filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Banner Section */}
        <ValuePropBanner items={jewelryValueProps} />
      </main>

      <Footer />
    </div>
  );
}
