"use client";

import { Search, Filter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { catalogItems } from "@/data/catalog";

function CatalogDisplay() {
    const searchParams = useSearchParams();

    // Extract search query params from banner
    const q = searchParams.get("q")?.toLowerCase() || "";
    const typeQuery = searchParams.get("type")?.toLowerCase() || "";
    const personsQuery = searchParams.get("persons") || "";

    // Filter Logic
    const filteredItems = catalogItems.filter(item => {
        const matchesName = item.name.toLowerCase().includes(q) || item.arabic.includes(q);
        const matchesType = typeQuery ? item.type.toLowerCase().includes(typeQuery) : true;

        let matchesPersons = true;
        if (personsQuery) {
            const p = parseInt(personsQuery);
            if (personsQuery === "8+") {
                matchesPersons = item.persons >= 8;
            } else if (!isNaN(p)) {
                matchesPersons = item.persons === p;
            }
        }

        return matchesName && matchesType && matchesPersons;
    });

    return (
        <div className="min-h-screen bg-stone-50 pt-12 pb-24">
            {/* Header */}
            <div className="bg-stone-900 text-white py-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-zellige opacity-5 pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Our Catalog</h1>
                    <p className="font-sans text-stone-300 max-w-2xl mx-auto text-lg">
                        Discover our authentic ready-to-[cook] "Beldi" selection. Each meal is precisely portioned, vacuum-sealed, and comes with a chef's recipe guide.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="flex justify-between items-center mb-8 border-b border-stone-200 pb-4">
                    <p className="font-sans text-stone-600">
                        {q || typeQuery || personsQuery ?
                            `Showing ${filteredItems.length} results for your search` :
                            `Showing all ${catalogItems.length} traditional dishes`
                        }
                    </p>
                    <button className="flex items-center gap-2 text-clic-purple font-medium hover:text-clic-orange transition-colors">
                        <Filter className="w-5 h-5" /> Filter
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredItems.length === 0 && (
                        <div className="col-span-full py-12 text-center text-stone-500 font-sans">
                            No dishes found matching your criteria. Try adjusting your search filters.
                        </div>
                    )}
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-clic-purple uppercase shadow-sm">
                                    {item.type}
                                </div>
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full p-1 shadow-md">
                                    <img src="/images/halal_icon.png" alt="100% Halal" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="text-right mb-2">
                                    <span className="font-serif text-xl font-bold text-stone-800" dir="rtl">{item.arabic}</span>
                                </div>
                                <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">{item.name}</h3>

                                <div className="mt-auto pt-6 flex items-center justify-between border-t border-stone-100">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Portions</span>
                                        <span className="font-sans font-medium text-stone-700">{item.persons} Persons</span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Price</span>
                                        <span className="font-sans font-bold text-clic-orange text-lg">{item.price} MAD</span>
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-4 pt-4">
                                    <Link href={`/catalog/${item.id}`} className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium py-3 rounded-xl transition-colors text-sm text-center block">
                                        View Details
                                    </Link>
                                    <Link href="/cart" className="flex-1 bg-clic-purple hover:bg-clic-orange text-white font-medium py-3 rounded-xl transition-colors text-sm text-center block">
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CatalogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-stone-50 pt-32 text-center text-clic-purple font-sans">Loading Catalog...</div>}>
            <CatalogDisplay />
        </Suspense>
    );
}
