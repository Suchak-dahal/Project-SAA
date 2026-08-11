import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Gem, Droplet, Truck, Gift, Heart, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { ValuePropBanner } from "@/components/ui/ValuePropBanner";

export default function Home() {
  const categories = [
    {
      name: "Clothing",
      description: "Timeless silhouettes & romantic linen dresses",
      href: "/clothing",
      icon: <Sparkles className="h-6 w-6" />,
      bgImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600",
    },
    {
      name: "Jewelry",
      description: "Delicate handcrafted brass & gold plated pieces",
      href: "/jewelry",
      icon: <Gem className="h-6 w-6" />,
      bgImage: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600",
    },
    {
      name: "Cosmetics",
      description: "Clean, natural, and skin-loving essentials",
      href: "/cosmetics",
      icon: <Droplet className="h-6 w-6" />,
      bgImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600",
    },
  ];

  const homeValueProps = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Complimentary Shipping",
      desc: "Free standard delivery across Nepal on orders over NPR 5,000.",
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Beautifully Packaged",
      desc: "Every order arrives in our signature eco-friendly gift box.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Made in Nepal",
      desc: "Supporting local artisans and ethical manufacturing practices.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20 lg:py-0 lg:h-[calc(100vh-80px)] flex items-center bg-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              {/* Hero Left Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#C5A059]/30 rounded-full bg-[#C5A059]/5">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                    Premium Nepali Luxury
                  </span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] text-[#3B2F2F] tracking-tight">
                  Soft Feminine <br className="hidden sm:inline" />
                  <span className="italic text-[#C5A059]">Nepali Luxury</span>
                </h1>
                <p className="max-w-md mx-auto lg:mx-0 text-sm md:text-base text-[#3B2F2F]/80 leading-relaxed font-sans font-light">
                  Elevate your daily ritual with ethically crafted linen dresses, delicate botanical jewelry, and clean natural cosmetics. Inspired by Nepal's rich roots, tailored for modern elegance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button variant="primary" href="/clothing">
                    Shop the Collection
                  </Button>
                  <Button variant="secondary" href="/about">
                    Our Story
                  </Button>
                </div>
              </div>

              {/* Hero Right Image */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] h-full overflow-hidden bg-[#F4EFE6] border border-[#C5A059]/10">
                <Image
                  src="/images/homepage_hero.png"
                  alt="SAA Collection Editorial Campaign"
                  fill
                  priority
                  className="object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid Section */}
        <section className="py-20 md:py-28 bg-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                Curated Departures
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3B2F2F] mt-2 mb-4">
                Explore the Collections
              </h2>
              <div className="h-[1px] w-20 bg-[#C5A059] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <Link
                  href={cat.href}
                  key={cat.name}
                  className="group relative flex flex-col items-center p-8 bg-[#F4EFE6] border border-[#C5A059]/10 overflow-hidden hover:shadow-md hover:border-[#C5A059]/30 transition-all duration-500 text-center"
                >
                  {/* Circular Icon */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#C5A059] shadow-sm group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500 mb-6">
                    {cat.icon}
                  </div>

                  <h3 className="relative z-10 font-serif text-xl text-[#3B2F2F] mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
                    {cat.name}
                  </h3>
                  
                  <p className="relative z-10 text-xs text-[#3B2F2F]/70 leading-relaxed font-sans mb-6 max-w-xs">
                    {cat.description}
                  </p>

                  <span className="relative z-10 flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-[#C5A059] group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>

                  {/* Micro gradient background or visual highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Banner Section */}
        <ValuePropBanner items={homeValueProps} />
      </main>

      <Footer />
    </div>
  );
}
