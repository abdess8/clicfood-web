"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
            {/* Background Image Parallax */}
            <motion.div
                style={{ y: yBackground, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-black/30 z-10" />
                <div className="absolute inset-0 bg-zellige opacity-10 mix-blend-overlay z-10" />
                {/* Custom ClicFood Hero Banner */}
                <img
                    src="/images/intro_banner.jpg"
                    alt="Premium Moroccan Cuisine"
                    className="w-full h-full object-cover scale-110" // scale up to allow parallax without seeing edges
                />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ y: yText, opacity }}
                className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-20"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="uppercase tracking-[0.3em] text-clic-orange font-semibold text-sm mb-6 block font-sans"
                >
                    Premium Ready-to-Cook
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8"
                >
                    The Authentic <br />
                    <span className="italic font-light opacity-90">Beldi</span> Experience
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-stone-300 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Discover our curated collection of traditional Moroccan recipes.
                    Freshly prepared, ISO-certified, and ready for you to cook at home to perfection.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        href="/catalog"
                        className="group relative px-8 py-4 bg-gradient-to-r from-clic-purple to-clic-orange text-white overflow-hidden rounded-full font-sans font-medium hover:shadow-[0_0_40px_-10px_rgba(243,146,0,0.6)] transition-all flex items-center justify-center gap-2"
                    >
                        <span className="relative z-10">Explore Our Menu</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    </Link>

                    <Link
                        href="/concept"
                        className="px-8 py-4 border border-white/30 text-white rounded-full font-sans font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                        The ClicFood Story
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs font-sans tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-12 bg-gradient-to-b from-clic-orange to-transparent"
                />
            </motion.div>
        </section>
    );
}
