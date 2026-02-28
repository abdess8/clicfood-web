"use client";

import { motion } from "framer-motion";
import { Search, ChevronDown, User, UtensilsCrossed, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [dishType, setDishType] = useState("");
    const [persons, setPersons] = useState("2");
    const [isVisible, setIsVisible] = useState(true);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/catalog?q=${encodeURIComponent(searchQuery)}&type=${encodeURIComponent(dishType)}&persons=${encodeURIComponent(persons)}`);
    };

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-stone-900 border-b border-stone-800 relative z-50 text-sm font-sans"
        >
            <div className="absolute inset-0 bg-zellige opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4 relative">
                <form
                    onSubmit={handleSearch}
                    className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 pr-8"
                >
                    {/* Brand/Context Label */}
                    <div className="hidden lg:flex items-center gap-2 text-stone-400 font-medium tracking-wide">
                        <Search className="w-4 h-4 text-clic-orange" />
                        <span>FIND YOUR MEAL</span>
                    </div>

                    <div className="flex-1 w-full max-w-4xl flex flex-col md:flex-row shadow-sm rounded-2xl md:rounded-full overflow-hidden border border-stone-700 bg-stone-800/50 backdrop-blur-md">

                        {/* Dish Name Input */}
                        <div className="flex-1 flex items-center px-4 py-3 md:py-2 hover:bg-stone-800 transition-colors border-b md:border-b-0 md:border-r border-stone-700">
                            <UtensilsCrossed className="w-4 h-4 text-stone-400 shrink-0" />
                            <input
                                type="text"
                                placeholder="Dish name (e.g. Tagine)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none text-stone-200 placeholder-stone-500 focus:outline-none px-3 py-1"
                            />
                        </div>

                        {/* Dish Type Select */}
                        <div className="md:w-48 flex items-center px-4 py-3 md:py-2 hover:bg-stone-800 transition-colors border-b md:border-b-0 md:border-r border-stone-700 relative">
                            <select
                                value={dishType}
                                onChange={(e) => setDishType(e.target.value)}
                                className="w-full bg-transparent text-stone-200 appearance-none focus:outline-none cursor-pointer placeholder-stone-500 z-10 relative"
                            >
                                <option value="" disabled className="text-stone-500">Dish Type</option>
                                <option value="beef" className="bg-stone-800 text-stone-200">Beef Meat</option>
                                <option value="chicken" className="bg-stone-800 text-stone-200">Chicken/Poultry</option>
                                <option value="lamb" className="bg-stone-800 text-stone-200">Lamb/Mutton</option>
                                <option value="vegetarian" className="bg-stone-800 text-stone-200">Vegetarian</option>
                                <option value="pastry" className="bg-stone-800 text-stone-200">Pastillas & Savory</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-stone-400 absolute right-4 pointer-events-none" />
                        </div>

                        {/* Number of Persons Select */}
                        <div className="md:w-36 flex items-center px-4 py-3 md:py-2 hover:bg-stone-800 transition-colors relative">
                            <User className="w-4 h-4 text-stone-400 shrink-0" />
                            <select
                                value={persons}
                                onChange={(e) => setPersons(e.target.value)}
                                className="w-full bg-transparent text-stone-200 appearance-none focus:outline-none pl-2 pr-6 cursor-pointer z-10 relative"
                            >
                                <option value="1" className="bg-stone-800 text-stone-200">1 Person</option>
                                <option value="2" className="bg-stone-800 text-stone-200">2 Persons</option>
                                <option value="4" className="bg-stone-800 text-stone-200">4 Persons</option>
                                <option value="6" className="bg-stone-800 text-stone-200">6 Persons</option>
                                <option value="8+" className="bg-stone-800 text-stone-200">8+ Persons</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-stone-400 absolute right-4 pointer-events-none" />
                        </div>

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-clic-purple to-clic-orange text-white px-8 py-4 md:py-0 font-bold hover:brightness-110 transition-all font-sans uppercase tracking-wider text-xs"
                        >
                            Search
                        </button>

                    </div>
                </form>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-1 hover:bg-stone-800 rounded-full transition-colors z-10 text-stone-400"
                    aria-label="Close search banner"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}
