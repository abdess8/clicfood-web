"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 lg:px-12 py-4",
                    isScrolled || isMobileMenuOpen ? "glass py-3" : "bg-transparent py-5"
                )}
                style={{ marginTop: isScrolled ? "0" : "auto" }} // Handled globally via wrapper
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-50">
                        <img
                            src="/images/logo.png"
                            alt="ClicFood Official Logo"
                            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 font-sans font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-stone-700 hover:text-clic-purple transition-colors"
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-clic-purple to-clic-orange"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4 z-50">
                        <button className="p-2 hover:bg-stone-100 rounded-full transition-colors relative group">
                            <ShoppingBag className="w-5 h-5 text-stone-700 group-hover:text-clic-purple" />
                            <span className="absolute top-0 right-0 w-4 h-4 bg-clic-orange text-white text-[10px] grid place-items-center rounded-full font-bold">2</span>
                        </button>
                        <button className="hidden md:flex p-2 hover:bg-stone-100 rounded-full transition-colors group">
                            <User className="w-5 h-5 text-stone-700 group-hover:text-clic-purple" />
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-stone-700"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center pt-24 pb-8"
                >
                    <nav className="flex flex-col items-center gap-8 text-2xl font-serif text-stone-800">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={clsx(
                                    "hover:text-clic-purple transition-colors",
                                    pathname === link.href ? "text-gradient font-bold" : ""
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-8 flex gap-6">
                            <button className="flex items-center gap-2 text-stone-600 hover:text-clic-orange text-lg font-sans">
                                <User className="w-5 h-5" /> Account
                            </button>
                        </div>
                    </nav>
                </motion.div>
            )}
        </>
    );
}
