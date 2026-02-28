import { catalogItems } from "@/data/catalog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Flame, ChevronRight, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const item = catalogItems.find(i => i.id.toString() === resolvedParams.id);

    if (!item) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-stone-50 pt-20 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm font-sans text-stone-500 mb-8 pt-8">
                    <Link href="/" className="hover:text-clic-purple transition-colors">Home</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/catalog" className="hover:text-clic-purple transition-colors">Catalog</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-stone-800 font-medium">{item.name}</span>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col lg:flex-row">

                    {/* Left: Image Gallery */}
                    <div className="w-full lg:w-1/2 relative bg-stone-900 border-r border-stone-100 min-h-[400px] lg:min-h-[600px]">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">
                            <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-clic-purple uppercase shadow-sm">
                                {item.type}
                            </span>
                        </div>
                        <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg p-1.5 z-10">
                            <img src="/images/halal_icon.png" alt="100% Halal Certified" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-2 rtl text-right">
                            <span className="font-serif text-2xl font-bold text-stone-400" dir="rtl">{item.arabic}</span>
                        </div>
                        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                            {item.name}
                        </h1>

                        <p className="font-sans text-stone-600 text-lg leading-relaxed mb-8">
                            {item.description}
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-stone-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-stone-100">
                                <Users className="w-6 h-6 text-clic-orange" />
                                <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Portions</span>
                                <span className="font-sans font-semibold text-stone-800">{item.persons} Persons</span>
                            </div>
                            <div className="bg-stone-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-stone-100">
                                <Clock className="w-6 h-6 text-clic-orange" />
                                <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Prep Time</span>
                                <span className="font-sans font-semibold text-stone-800">{item.prepTime}</span>
                            </div>
                            <div className="bg-stone-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-stone-100">
                                <Flame className="w-6 h-6 text-clic-orange" />
                                <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Difficulty</span>
                                <span className="font-sans font-semibold text-stone-800">{item.difficulty}</span>
                            </div>
                            <div className="bg-stone-50 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-stone-100">
                                <ShieldCheck className="w-6 h-6 text-clic-orange" />
                                <span className="text-xs text-stone-500 uppercase tracking-wider font-bold">Hygiene</span>
                                <span className="font-sans font-semibold text-stone-800">ONSSA</span>
                            </div>
                        </div>

                        {/* Ingredients / Details */}
                        <div className="mb-10 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                            <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Chef's Notes</h3>
                            <p className="font-sans text-stone-600 mb-4">{item.details}</p>

                            <div className="flex items-center justify-between border-t border-stone-200 pt-4 mt-4">
                                <span className="text-sm font-sans text-stone-500 font-medium">Nutrition Facts</span>
                                <span className="text-sm font-sans text-stone-800 font-bold bg-white px-3 py-1 rounded-full shadow-sm">{item.nutrition}</span>
                            </div>
                        </div>

                        {/* Add to Cart Footer */}
                        <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-stone-100">
                            <div>
                                <span className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Total Price</span>
                                <span className="font-sans text-4xl font-bold text-clic-purple">{item.price} MAD</span>
                            </div>

                            <Link
                                href="/cart"
                                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-clic-purple to-clic-orange text-white px-8 py-4 rounded-full font-bold font-sans flex items-center justify-center gap-3 hover:shadow-lg transition-all hover:-translate-y-1 active:scale-95"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                Add to Cart
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
