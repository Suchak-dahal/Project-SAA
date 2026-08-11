"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useApp } from "@/components/context/AppContext";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { isCartOpen, setCartOpen, cart, updateQuantity, removeFromCart } = useApp();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Group items by currency to show clean totals
  const subtotalNPR = cart
    .filter((item) => item.currency === "NPR")
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const subtotalUSD = cart
    .filter((item) => item.currency === "USD")
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (val: number, curr: "NPR" | "USD") => {
    if (curr === "NPR") {
      return `NPR ${val.toLocaleString()}`;
    }
    return `$${val.toFixed(2)}`;
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 2000);
  };

  const resetCheckout = () => {
    setCheckoutComplete(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[450px] bg-[#FBF9F5] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#C5A059]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#C5A059]" />
            <h2 className="font-serif text-lg text-[#3B2F2F] tracking-wide">
              Shopping Bag
            </h2>
            <span className="text-xs bg-[#C5A059] text-white px-2 py-0.5 rounded-full font-sans">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-1 hover:text-[#C5A059] transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {checkoutComplete ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 px-4">
              <div className="h-16 w-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059] mb-2">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl text-[#3B2F2F]">Order Placed!</h3>
              <p className="text-sm text-[#3B2F2F]/70">
                Thank you for shopping with SAA Collection. Your luxurious order has been registered successfully.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setCartOpen(false);
                  resetCheckout();
                }}
                className="w-full mt-4"
              >
                Continue Exploring
              </Button>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="h-12 w-12 text-[#3B2F2F]/20 stroke-[1]" />
              <p className="font-serif text-base text-[#3B2F2F]/70">Your bag is empty</p>
              <Button
                variant="link"
                onClick={() => setCartOpen(false)}
                className="text-xs"
              >
                Shop the Collections &rarr;
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#F4EFE6] border border-transparent hover:border-[#C5A059]/10 transition-colors"
                >
                  {/* Item Image */}
                  <div className="relative h-20 w-16 flex-shrink-0 bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm text-[#3B2F2F] line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#3B2F2F]/40 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-[10px] text-[#C5A059] uppercase tracking-widest mt-0.5">
                        {item.category}
                      </p>
                    </div>

                    {/* Quantity controls & Price */}
                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center border border-[#C5A059]/20 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#3B2F2F]/70 hover:text-[#C5A059] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#3B2F2F]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#3B2F2F]/70 hover:text-[#C5A059] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-xs font-semibold text-[#3B2F2F]">
                        {formatPrice(item.price * item.quantity, item.currency)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Subtotals */}
        {!checkoutComplete && cart.length > 0 && (
          <div className="p-6 border-t border-[#C5A059]/10 bg-[#F4EFE6]/50 space-y-4">
            <div className="space-y-1.5">
              {subtotalNPR > 0 && (
                <div className="flex justify-between text-xs text-[#3B2F2F]">
                  <span>Subtotal (NPR)</span>
                  <span className="font-semibold">{formatPrice(subtotalNPR, "NPR")}</span>
                </div>
              )}
              {subtotalUSD > 0 && (
                <div className="flex justify-between text-xs text-[#3B2F2F]">
                  <span>Subtotal (USD)</span>
                  <span className="font-semibold">{formatPrice(subtotalUSD, "USD")}</span>
                </div>
              )}
              <div className="text-[10px] text-[#3B2F2F]/60 text-right">
                Taxes and shipping calculated at checkout
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full flex items-center justify-center"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <span className="flex items-center gap-2 lowercase normal-case tracking-normal">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing order...
                </span>
              ) : (
                "Proceed to Checkout"
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
