"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const standards = [
    "Handcrafted Daily",
    "100% Natural Ingredients",
    "ISO-Certified Hygiene",
    "Authentic Moroccan Recipes",
];

export default function BeldiStory() {
    return (
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
            {/* Decorative Texture */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-zellige opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                {/* Images Grid */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4 pt-12"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1000&auto=format&fit=crop"
                                alt="Fresh ingredients"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="aspect-square overflow-hidden rounded-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1548811579-017fc2a7998b?q=80&w=1000&auto=format&fit=crop"
                                alt="Moroccan spices"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <div className="aspect-square overflow-hidden rounded-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1558223405-24b95f1d0ca5?q=80&w=1000&auto=format&fit=crop"
                                alt="Traditional cooking"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1563245464-9fbb3da65db7?q=80&w=1000&auto=format&fit=crop"
                                alt="Finished Beldi meal"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-2xl z-10 hidden md:block"
                    >
                        <div className="w-24 h-24 rounded-full border border-dashed border-clic-orange flex items-center justify-center text-center p-2">
                            <span className="font-serif font-bold text-clic-purple text-sm leading-tight">100%<br />Premium<br />Beldi</span>
                        </div>
                    </motion.div>
                </div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 space-y-8"
                >
                    <div>
                        <span className="text-clic-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Concept</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
                            The Art of Modern Moroccan Gastronomy
                        </h2>
                    </div>

                    <div className="space-y-4 text-stone-600 font-sans leading-relaxed text-lg">
                        <p>
                            At ClicFood, we bridge the gap between time-honored traditional recipes ("Beldi") and the fast pace of modern life.
                        </p>
                        <p>
                            Every meal is carefully prepared by our master chefs using fresh, locally sourced ingredients. Delivered to your door ready-to-cook, ensuring you experience the true warmth of Moroccan hospitality without the hassle.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {standards.map((standard, index) => (
                            <motion.li
                                key={standard}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                className="flex items-center gap-3 font-medium text-stone-700"
                            >
                                <CheckCircle2 className="w-5 h-5 text-clic-orange" />
                                <span>{standard}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <button className="mt-8 px-8 py-4 bg-stone-900 text-white rounded-full font-sans font-medium hover:bg-clic-purple transition-colors duration-300">
                            Read Our Full Story
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
