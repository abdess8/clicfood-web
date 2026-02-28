"use client";

import { motion } from "framer-motion";
import { Clock, Users, Flame, Info } from "lucide-react";
import Image from "next/image";

const meals = [
    {
        id: 1,
        title: "Spicy Grilled Coquelet",
        description: "Premium young chicken marinated in spicy Moroccan herbs (كوكلي مشرمل بمذاق الحار).",
        image: "/images/coquelet_spicy.jpg",
        prepTime: "45 mins",
        servings: 1,
        difficulty: "Easy",
        nutrition: "580 kcal | 50g Protein",
        tags: ["Signature", "Spicy"]
    },
    {
        id: 2,
        title: "Chicken Shawarma Kit",
        description: "Authentic sliced chicken shawarma ready for wrapping.",
        image: "/images/shawarma_poulet.jpg",
        prepTime: "15 mins",
        servings: 2,
        difficulty: "Easy",
        nutrition: "450 kcal | 35g Protein",
        tags: ["Quick Prep", "Street Food"]
    },
    {
        id: 3,
        title: "Beldi Coquelet Batch",
        description: "Multi-pack of our signature marinated chickens ready for your family's oven.",
        image: "/images/coquelets_table.jpg",
        prepTime: "45 mins",
        servings: 6,
        difficulty: "Easy",
        nutrition: "550 kcal | 48g Protein",
        tags: ["Family Size"]
    },
    {
        id: 4,
        title: "Vegetable Couscous",
        description: "Seven-vegetable beldi couscous with savory onion Tfaya.",
        image: "https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=800&auto=format&fit=crop",
        prepTime: "30 mins",
        servings: 4,
        difficulty: "Easy",
        nutrition: "410 kcal | 12g Protein",
        tags: ["Vegetarian", "High Fiber"]
    }
];

export default function InteractiveMenu() {
    return (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-stone-50">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <span className="text-clic-purple font-bold uppercase tracking-widest text-sm mb-4 block">Our Catalog</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 mb-6 text-gradient inline-block">
                    Fresh, Healthy & Ready-to-[Cook]
                </h2>
                <p className="text-stone-600 font-sans max-w-2xl mx-auto text-lg">
                    Hover over our signature dishes to reveal nutritional facts and preparation details. Everything is pre-measured and vacuum-sealed for maximum freshness.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {meals.map((meal, index) => (
                    <motion.div
                        key={meal.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={meal.image}
                                alt={meal.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                        </div>

                        {/* Default Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transition-opacity duration-500 group-hover:opacity-0">
                            <h3 className="font-serif text-2xl font-bold mb-2">{meal.title}</h3>
                            <div className="flex items-center gap-4 text-sm font-sans text-stone-300">
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {meal.prepTime}</span>
                                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {meal.servings}</span>
                            </div>
                        </div>

                        {/* Hover Content (Nutritional & Details) */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-clic-purple/80 backdrop-blur-sm">
                            <Info className="w-8 h-8 mb-4 opacity-80" />
                            <h3 className="font-serif text-xl font-bold mb-3">{meal.title}</h3>
                            <p className="text-sm font-sans mb-6 text-stone-200">{meal.description}</p>

                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm w-full font-medium">
                                <div className="flex flex-col items-center">
                                    <span className="text-clic-orange mb-1 bg-white/10 px-2 rounded w-full">Nutrition</span>
                                    <span className="text-xs">{meal.nutrition}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-clic-orange mb-1 bg-white/10 px-2 rounded w-full">Difficulty</span>
                                    <span className="text-xs">{meal.difficulty}</span>
                                </div>
                            </div>

                            <button className="mt-8 px-6 py-2 bg-white text-clic-purple rounded-full font-bold text-sm w-full hover:bg-clic-orange hover:text-white transition-colors">
                                View Recipe & Order
                            </button>
                        </div>

                        {/* Tags (Always visible on top) */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                            {meal.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Halal Custom Icon */}
                        <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 rounded-full p-1 shadow-md">
                            <img src="/images/halal_icon.png" alt="100% Halal" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <button className="px-8 py-4 border-2 border-stone-300 text-stone-700 rounded-full font-sans font-bold hover:border-clic-purple hover:text-clic-purple transition-colors">
                    View Full Catalog
                </button>
            </div>
        </section>
    );
}
