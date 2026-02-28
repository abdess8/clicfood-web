"use client";

import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const initialCart = [
    { id: 1, name: "Spicy Grilled Coquelet", type: "Chicken", price: 90, quantity: 3, image: "/images/coquelet_spicy.jpg" },
    { id: 2, name: "Chicken Shawarma Kit", type: "Chicken", price: 110, quantity: 1, image: "/images/shawarma_poulet.jpg" }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCart);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items => items.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const delivery = subtotal >= 300 ? 0 : 30; // Free delivery over 300 MAD
    const total = subtotal + delivery;

    return (
        <div className="min-h-screen bg-stone-50 pt-12 pb-24">
            {/* Header */}
            <div className="bg-stone-900 text-white py-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-zellige opacity-5 pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="uppercase tracking-[0.3em] text-clic-orange font-semibold text-sm mb-4 block font-sans">
                        Your Order
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 flex justify-center items-center gap-4">
                        <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 text-clic-purple" />
                        Panier
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12">
                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm">
                        <ShoppingBag className="w-20 h-20 text-stone-300 mx-auto mb-6" />
                        <h2 className="font-serif text-3xl text-stone-800 mb-4">Your cart is empty</h2>
                        <p className="font-sans text-stone-500 mb-8">Looks like you haven't added any authentic Beldi dishes yet.</p>
                        <Link href="/catalog" className="inline-block bg-clic-purple text-white px-8 py-4 rounded-full font-bold hover:bg-clic-orange transition-colors">
                            Explore Catalog
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            <h2 className="font-serif text-2xl font-bold text-stone-800 border-b border-stone-200 pb-4">
                                Items to Cook ({cartItems.length})
                            </h2>

                            {cartItems.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    key={item.id}
                                    className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-stretch group"
                                >
                                    <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden relative">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>

                                    <div className="flex-1 flex flex-col py-2 w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-clic-purple">{item.type}</span>
                                                <h3 className="font-serif text-xl font-bold text-stone-800 line-clamp-1">{item.name}</h3>
                                            </div>
                                            <span className="font-sans font-bold text-lg text-clic-orange whitespace-nowrap ml-4">{item.price * item.quantity} MAD</span>
                                        </div>

                                        <p className="font-sans text-stone-500 text-sm mb-4">Vacuum-sealed, ready-to-cook with recipe guide.</p>

                                        <div className="mt-auto flex items-center justify-between border-t border-stone-50 pt-4">
                                            {/* Quantity Control */}
                                            <div className="flex items-center gap-3 bg-stone-50 rounded-full px-3 py-1 border border-stone-200">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-clic-orange transition-colors text-stone-500">
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="font-bold w-6 text-center text-stone-800">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-clic-orange transition-colors text-stone-500">
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-500 transition-colors flex items-center gap-2 text-sm font-medium">
                                                <Trash2 className="w-4 h-4" />
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-lg sticky top-32">
                                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6 pb-4 border-b border-stone-100">Order Summary</h2>

                                <div className="space-y-4 font-sans text-stone-600 mb-8">
                                    <div className="flex justify-between items-center">
                                        <span>Subtotal</span>
                                        <span className="font-medium text-stone-800">{subtotal} MAD</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Delivery</span>
                                        {delivery === 0 ? (
                                            <span className="font-bold text-green-600">Free</span>
                                        ) : (
                                            <span className="font-medium text-stone-800">{delivery} MAD</span>
                                        )}
                                    </div>
                                    {delivery > 0 && (
                                        <div className="text-xs text-stone-400 text-right">
                                            Add {300 - subtotal} MAD more for free delivery
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-stone-200 pt-6 mb-8">
                                    <div className="flex justify-between items-center">
                                        <span className="font-serif text-xl font-bold text-stone-800">Total</span>
                                        <span className="font-sans text-3xl font-bold text-clic-purple">{total} MAD</span>
                                    </div>
                                    <p className="text-xs font-sans text-stone-400 text-right mt-1">Taxes included</p>
                                </div>

                                <Link href="/checkout" className="w-full bg-gradient-to-r from-clic-purple to-clic-orange text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                                    Proceed to Checkout
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="mt-6 flex flex-col gap-3 text-xs font-sans text-stone-500">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <span>Secure Checkout (128-bit SSL)</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-clic-orange"></span>
                                        <span>Cold-chain delivery guaranteed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
