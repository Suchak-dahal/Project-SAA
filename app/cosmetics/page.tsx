"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Sparkles, Heart, Plus, Droplet } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { useApp } from "@/components/context/AppContext";

interface CosmeticsProduct {
  id: string;
  title: string;
  price: number;
  priceStr: string;
  image: string;
  description: string;
  category: string;
}

export default function CosmeticsPage() {
  const { addToCart } = useApp();

  const products: CosmeticsProduct[] = [
    {
      id: "cos-1",
      title: "Radiance Facial Oil",
      price: 48,
      priceStr: "$48.00",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600",
      description: "Nourishing blend for a healthy glow",
      category: "Facial Care",
    },
    {
      id: "cos-2",
      title: "Nourish Daily Cream",
      price: 42,
      priceStr: "$42.00",
      image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600",
      description: "Hydrating cream to restore & soften",
      category: "Facial Care",
    },
    {
      id: "cos-3",
      title: "Rose Hydrating Mist",
      price: 28,
      priceStr: "$28.00",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600",
      description: "Refreshes, tones & soothes skin",
      category: "Facial Care",
    },
    {
      id: "cos-4",
      title: "Hydrating Lip Gloss",
      price: 18,
      priceStr: "$18.00",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600",
      description: "Natural shine with nourishing care",
      category: "Lip Care",
    },
    {
      id: "cos-5",
      title: "Botanical Soap",
      price: 16,
      priceStr: "$16.00",
      image: "https://images.unsplash.com/photo-1607006342411-9a336f56891c?q=80&w=600",
      description: "Gentle cleanse with natural botanicals",
      category: "Body Care",
    },
  ];

  const pillars = [
    {
      icon: (
        <svg
          className="h-6 w-6 text-[#C5A059]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m1.286 5.686A5 5 0 1116.65 11.79M12 7a3 3 0 100 6 3 3 0 000-6z"
          />
        </svg>
      ),
      title: "Clean",
      desc: "No harsh chemicals, just clean beauty.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-[#C5A059]" />,
      title: "Natural",
      desc: "Made with ingredients from nature.",
    },
    {
      icon: <Heart className="h-6 w-6 text-[#C5A059]" />,
      title: "Skin-Loving",
      desc: "Formulated to nourish & support skin.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 text-[#C5A059]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
          <path d="M12 7c-2 0-3.5 1.5-3.5 3.5 0 .7.2 1.3.5 1.8l-1.3 3.3a1 1 0 0 0 .5 1.3l2 .8a1 1 0 0 0 1.3-.5l.8-2.1c.3.1.6.2.9.2s.6-.1.9-.2l.8 2.1a1 1 0 0 0 1.3.5l2-.8a1 1 0 0 0 .5-1.3l-1.3-3.3c.3-.5.5-1.1.5-1.8 0-2-1.5-3.5-3.5-3.5Z" />
          <path d="M16 11c0 2-2 2-2 4a2 2 0 0 1-4 0c0-2-2-2-2-4" />
        </svg>
      ), // Representing rabbit/cruelty free
      title: "Cruelty-Free",
      desc: "Beauty with kindness at the heart.",
    },
  ];

  const handleQuickAdd = (product: CosmeticsProduct) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      priceStr: product.priceStr,
      image: product.image,
      category: product.category,
      currency: "USD",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />

      <main className="flex-grow">
        {/* Cosmetics Hero Banner */}
        <section className="relative overflow-hidden bg-[#FBF9F5] border-b border-[#C5A059]/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16">
              {/* Left Column Content */}
              <div className="lg:col-span-5 space-y-6 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#3B2F2F] leading-tight">
                  Cosmetics <br /> Collection
                </h1>
                
                {/* Botanical Separator */}
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                  <Leaf className="h-3 w-3 text-[#C5A059]" />
                  <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-xl italic text-[#C5A059]">
                    Clean. Natural. Skin-loving.
                  </h3>
                  <p className="text-sm text-[#3B2F2F]/80 leading-relaxed font-sans font-light">
                    Thoughtfully crafted beauty essentials made with natural ingredients your skin will love. Formulated without synthetic additives, artificial fragrances, or cruelty.
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 font-sans font-medium tracking-widest bg-[#C5A059] text-white hover:bg-[#B59049] px-6 py-3 text-xs uppercase cursor-pointer transition-all duration-300 transform hover:-translate-y-[1px]">
                  Natural Beauty <Leaf className="h-3 w-3 fill-white" />
                </button>
              </div>

              {/* Right Column Product Shot Campaign */}
              <div className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] overflow-hidden bg-[#F4EFE6] border border-[#C5A059]/10 shadow-sm">
                <Image
                  src="/images/cosmetics_hero.png"
                  alt="Cosmetics Collection Campaign Showcase"
                  fill
                  priority
                  className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collection List Section */}
        <section className="py-20 md:py-28 bg-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Title */}
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold flex items-center justify-center gap-1.5 mb-2">
                <Leaf className="h-3.5 w-3.5" />
                <span>OUR NATURAL ESSENTIALS</span>
                <Leaf className="h-3.5 w-3.5" />
              </span>
              <div className="h-[1px] w-20 bg-[#C5A059] mx-auto mt-4"></div>
            </div>

            {/* Custom Cosmetics Grid matching ddd.jpeg */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col w-full max-w-[220px] bg-[#F4EFE6] border border-transparent hover:border-[#C5A059]/10 p-3 pb-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500"
                >
                  {/* Product Image inside rounded-xl white frame */}
                  <div className="relative aspect-[1/1] w-full bg-white rounded-xl overflow-hidden mb-4 border border-[#C5A059]/5">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover object-center p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Title & Desc & Price centered */}
                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm text-[#3B2F2F] font-semibold line-clamp-1 mb-1">
                        {product.title}
                      </h4>
                      <p className="text-[10px] text-[#3B2F2F]/60 font-sans leading-relaxed mb-3 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-[#3B2F2F] tracking-wide mt-auto">
                      {product.priceStr}
                    </p>
                  </div>

                  {/* Plus Icon at bottom center */}
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#C5A059] text-white hover:bg-[#B59049] transition-all duration-300 shadow-md hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Add to cart"
                  >
                    <Plus className="h-4.5 w-4.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four-Pillars Value Section */}
        <section className="border-t border-[#C5A059]/20 bg-[#F4EFE6]/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 justify-items-center">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center max-w-xs space-y-3"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059]">
                    {pillar.icon}
                  </div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-[#3B2F2F] font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#3B2F2F]/70 leading-relaxed font-sans max-w-[200px]">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
