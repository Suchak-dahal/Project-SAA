"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { SlidersHorizontal, ChevronDown, Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { ProductCard } from "@/components/ui/ProductCard";
import { ValuePropBanner } from "@/components/ui/ValuePropBanner";
import { Button } from "@/components/ui/Button";

interface DressProduct {
  id: string;
  title: string;
  price: number;
  priceStr: string;
  image: string;
  category: string;
  tags: string[]; // for filtering
  dateAdded: string; // for sorting
}

export default function ClothingPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filterPills = ["All", "New In", "Maxi", "Floral", "Midi", "Off-Shoulder"];

  const products: DressProduct[] = [
    {
      id: "cloth-1",
      title: "Lumière Ivory Dress",
      price: 7490,
      priceStr: "NPR 7,490.00",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600",
      category: "Dresses",
      tags: ["New In", "Midi"],
      dateAdded: "2026-08-01",
    },
    {
      id: "cloth-2",
      title: "Scarlet Romance Dress",
      price: 7990,
      priceStr: "NPR 7,990.00",
      image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=600",
      category: "Dresses",
      tags: ["New In", "Maxi"],
      dateAdded: "2026-08-05",
    },
    {
      id: "cloth-3",
      title: "Fleur De Rose Dress",
      price: 7690,
      priceStr: "NPR 7,690.00",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600",
      category: "Dresses",
      tags: ["Maxi", "Floral"],
      dateAdded: "2026-07-25",
    },
    {
      id: "cloth-4",
      title: "Olive Whisper Dress",
      price: 7190,
      priceStr: "NPR 7,190.00",
      image: "https://images.unsplash.com/photo-1549064482-6779ba3292fe?q=80&w=600",
      category: "Dresses",
      tags: ["Midi"],
      dateAdded: "2026-07-20",
    },
    {
      id: "cloth-5",
      title: "Blush Romance Dress",
      price: 7490,
      priceStr: "NPR 7,490.00",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600",
      category: "Dresses",
      tags: ["Maxi", "Off-Shoulder"],
      dateAdded: "2026-07-15",
    },
    {
      id: "cloth-6",
      title: "Gardenia Dream Dress",
      price: 7690,
      priceStr: "NPR 7,690.00",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=600",
      category: "Dresses",
      tags: ["Floral"],
      dateAdded: "2026-07-10",
    },
  ];

  const clothingValueProps = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Shipping",
      desc: "On orders above NPR 5,000",
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: "Easy Returns",
      desc: "14-day return policy",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Secure Payments",
      desc: "100% safe & trusted",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Need Help?",
      desc: "Chat with our team",
    },
  ];

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter
    if (activeFilter !== "All") {
      result = result.filter((product) => product.tags.includes(activeFilter));
    }

    // Sort
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else {
      // Newest
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
                  Clothing <br /> Collection
                </h1>
                <div className="h-[1px] w-16 bg-[#C5A059] mx-auto lg:mx-0"></div>
                <p className="text-sm text-[#3B2F2F]/80 leading-relaxed font-sans font-light">
                  Timeless pieces, beautifully crafted for you. Explore our collection of premium cotton, silks, and fine linens designed to celebrate the modern feminine.
                </p>
                <button
                  onClick={() => {
                    const gridElement = document.getElementById("romantic-dresses-section");
                    gridElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center font-sans font-medium tracking-widest bg-[#7E775B] text-white hover:bg-[#68624B] px-8 py-3.5 text-xs uppercase cursor-pointer transition-all duration-300 transform hover:-translate-y-[1px]"
                >
                  Explore Now
                </button>
              </div>

              {/* Right Column Image inside Archway */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] max-h-[550px] overflow-hidden bg-[#F4EFE6] rounded-t-full">
                <Image
                  src="/images/clothing_hero.png"
                  alt="Clothing Collection Campaign"
                  fill
                  priority
                  className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collection / Romantic Dresses Section */}
        <section id="romantic-dresses-section" className="py-16 md:py-24 bg-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-bold flex items-center justify-center gap-1.5 mb-2">
                <span>MADE FOR ROMANCE</span>
                <span className="text-xs">♥</span>
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3B2F2F] tracking-tight">
                Romantic Dresses
              </h2>
              <p className="text-xs md:text-sm text-[#3B2F2F]/60 mt-2 font-sans italic">
                Timeless silhouettes. Feminine details. Effortless you.
              </p>
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
                        ? "bg-[#7E775B] text-white border-[#7E775B]"
                        : "bg-transparent text-[#3B2F2F]/80 border-[#C5A059]/20 hover:border-[#C5A059]"
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>

              {/* Filter Indicators and Sort Dropdown */}
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
                    <option value="Newest">Newest</option>
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
        <ValuePropBanner items={clothingValueProps} />
      </main>

      <Footer />
    </div>
  );
}
