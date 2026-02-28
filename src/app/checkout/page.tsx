"use client";

import { CheckCircle2, ShieldCheck, Lock, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
                <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center border border-stone-100">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">Command Confirmed!</h2>
                    <p className="font-sans text-stone-600 mb-8 leading-relaxed">
                        Thank you! Your "Beldi" order is being prepared in our sterile kitchens.
                        You will receive a confirmation email with your cold-chain delivery tracking link shortly.
                    </p>
                    <Link href="/" className="inline-block w-full bg-clic-purple text-white font-bold py-4 rounded-xl hover:bg-clic-orange transition-colors">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-24 pb-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Simple Header */}
                <div className="mb-12 flex items-center gap-4 border-b border-stone-200 pb-6">
                    <Link href="/cart" className="text-stone-400 hover:text-clic-purple text-sm font-medium font-sans">
                        &larr; Back to Cart
                    </Link>
                    <h1 className="font-serif text-3xl font-bold text-stone-800 flex-1 text-center pr-20">Secure Checkout</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Form Content */}
                    <div className="lg:col-span-2 space-y-10">

                        <form id="checkout-form" onSubmit={handleSubmit} className="space-y-10">

                            {/* Delivery Information */}
                            <section className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                                    <span className="bg-stone-100 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                    Delivery Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                                        <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                                        <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                        <input required type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Delivery Address</label>
                                        <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all mb-4" placeholder="Street Address" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">City</label>
                                        <input required type="text" defaultValue="Casablanca" readOnly className="w-full bg-stone-100 border border-stone-200 rounded-xl px-4 py-3 text-stone-500 cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                                        <input required type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" placeholder="+212 6..." />
                                    </div>
                                </div>
                            </section>

                            {/* Payment Information */}
                            <section className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ShieldCheck className="w-32 h-32 text-clic-purple" />
                                </div>
                                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3 relative z-10">
                                    <span className="bg-stone-100 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                    Payment Method
                                </h2>

                                <div className="space-y-4 font-sans relative z-10">
                                    <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-clic-purple bg-clic-purple/5' : 'border-stone-200 hover:border-stone-300'}`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-5 h-5 accent-clic-purple" />
                                                <span className="font-bold text-stone-800 block">Credit/Debit Card</span>
                                            </div>
                                            <CreditCard className="w-6 h-6 text-stone-500" />
                                        </div>
                                        {paymentMethod === 'card' && (
                                            <div className="mt-6 space-y-4">
                                                <div className="relative">
                                                    <input type="text" placeholder="Card Number" className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-clic-purple/20 focus:border-clic-purple" />
                                                    <Lock className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input type="text" placeholder="MM/YY" className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-purple/20 focus:border-clic-purple" />
                                                    <input type="text" placeholder="CVC" className="w-full bg-white border border-stone-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-purple/20 focus:border-clic-purple" />
                                                </div>
                                            </div>
                                        )}
                                    </label>

                                    <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-clic-purple bg-clic-purple/5' : 'border-stone-200 hover:border-stone-300'}`}>
                                        <div className="flex items-center gap-3">
                                            <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 accent-clic-purple" />
                                            <div>
                                                <span className="font-bold text-stone-800 block">Cash on Delivery</span>
                                                <span className="text-sm text-stone-500">Pay when your order arrives</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </section>

                        </form>
                    </div>

                    {/* Right Sidebar: Mini Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-stone-900 text-white p-8 rounded-3xl border border-stone-800 shadow-xl sticky top-32">
                            <h3 className="font-serif text-xl font-bold border-b border-stone-700 pb-4 mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-start text-sm font-sans gap-4">
                                    <span className="text-stone-300">3x Spicy Grilled Coquelet</span>
                                    <span className="font-medium whitespace-nowrap">270 MAD</span>
                                </div>
                                <div className="flex justify-between items-start text-sm font-sans gap-4">
                                    <span className="text-stone-300">1x Chicken Shawarma Kit</span>
                                    <span className="font-medium whitespace-nowrap">110 MAD</span>
                                </div>
                            </div>

                            <div className="border-t border-stone-700 pt-6 space-y-4 font-sans text-sm mb-6">
                                <div className="flex justify-between items-center text-stone-400">
                                    <span>Subtotal</span>
                                    <span>380 MAD</span>
                                </div>
                                <div className="flex justify-between items-center text-stone-400">
                                    <span>Delivery</span>
                                    <span className="text-green-400 font-medium">Free</span>
                                </div>
                            </div>

                            <div className="border-t border-stone-700 pt-6 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="font-serif text-lg font-bold">Total to Pay</span>
                                    <span className="font-sans text-2xl font-bold text-clic-orange">380 MAD</span>
                                </div>
                            </div>

                            <button form="checkout-form" type="submit" className="w-full bg-gradient-to-r from-clic-purple to-clic-orange text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(243,146,0,0.4)] transition-all active:scale-[0.98] font-sans">
                                Confirm Order
                            </button>

                            <div className="mt-6 flex flex-col gap-3 text-xs font-sans text-stone-400 items-center text-center">
                                <p className="flex items-center gap-1 justify-center"><Lock className="w-3 h-3" /> Bank-grade 256-bit encryption</p>
                                <p>By confirming your order, you agree to our Terms of Service and Privacy Policy.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
