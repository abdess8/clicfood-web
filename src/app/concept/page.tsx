"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export default function ConceptPage() {
    return (
        <div className="min-h-screen bg-stone-50 pb-24">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900 pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-black/40 z-10" />
                    <div className="absolute inset-0 bg-zellige opacity-10 mix-blend-overlay z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1548811579-017fc2a7998b?q=80&w=2000&auto=format&fit=crop"
                        alt="Moroccan spices and traditions"
                        className="w-full h-full object-cover scale-105"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-20 text-center px-6 max-w-4xl mx-auto"
                >
                    <span className="uppercase tracking-[0.3em] text-clic-orange font-semibold text-sm mb-4 block font-sans">
                        Notre Philosophie
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6">
                        L'Art du Beldi <br />
                        <span className="italic font-light opacity-90">Prêt-à-Cuire</span>
                    </h1>
                </motion.div>
            </section>

            {/* Main Story Content */}
            <section className="max-w-4xl mx-auto px-6 -mt-20 relative z-30">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-stone-100"
                >
                    <div className="prose prose-stone prose-lg max-w-none font-sans text-stone-600 leading-relaxed mb-12">
                        <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clic-purple first-letter:mr-3 first-letter:float-left">
                            Vous aimez cuisiner et vous n’avez pas le temps, vous n’aimez pas cuisinez et vous souhaitez faire plaisir à votre entourage, vous invitez des convives et vous n’avez pas d’idées ou simplement pas d’aide, vous voulez juste vous faire plaisir, le concept des plats prêt-à-cuire vous accompagnera dans chacun de vos pas. Nous vous proposons une variété de plats pré-cuisinés dans nos cuisines, avec des produits de qualité et minutieusement choisis, des plats savoureux et sains.
                        </p>
                        <p>
                            Vous recevrez un guide de recette pour vous permettre de finaliser vos plats et les servir tout chaud à votre famille et vos convives. Le plat proposé vous permettra d’avoir une table garnie et bien fournie qui fera plaisir aux petits comme aux grands.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 my-16">
                        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100/50">
                            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-clic-orange" />
                                Hygiène & Qualité
                            </h3>
                            <p className="text-stone-600 font-sans">
                                Nos plats sont travaillés dans un environnement stérile n’excédant pas les 12 degrés afin de préserver la qualité de nos produits. Nous veillons à maintenir une cuisine propre et saine, comme à la maison.
                            </p>
                            <div className="mt-4 pt-4 border-t border-stone-200">
                                <p className="text-sm text-stone-500 font-medium">
                                    Nous détenons une licence de confiance, de qualité et de sécurité du bureau National de la sécurité sanitaire (ONSSA).
                                </p>
                            </div>
                        </div>

                        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100/50">
                            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-clic-purple" />
                                Conditionnement
                            </h3>
                            <p className="text-stone-600 font-sans">
                                Les plats sont conditionnés dans des boîtes alimentaires conformes aux normes de qualité, une première dans le domaine du conditionnement et du packaging au Maroc.
                            </p>
                        </div>
                    </div>

                    <div className="text-center font-serif text-2xl md:text-3xl text-clic-purple italic font-medium my-12 px-4">
                        "Nous faisons pour le mieux afin d’être à la hauteur de vos aspirations et de votre confiance."
                    </div>

                    {/* Service Promises */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-stone-100">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-4">
                                <Truck className="w-8 h-8 text-clic-orange" />
                            </div>
                            <h4 className="font-serif font-bold text-stone-800 text-lg mb-2">Livraison</h4>
                            <p className="font-sans text-sm text-stone-600">
                                Livraison gratuite sur Casablanca soumise à des conditions *.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-8 h-8 text-clic-purple" />
                            </div>
                            <h4 className="font-serif font-bold text-stone-800 text-lg mb-2">Paiement Sécurisé</h4>
                            <p className="font-sans text-sm text-stone-600">
                                Nous sécurisons vos transactions de paiements.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center mb-4">
                                <HeartHandshake className="w-8 h-8 text-clic-orange" />
                            </div>
                            <h4 className="font-serif font-bold text-stone-800 text-lg mb-2">Service Client</h4>
                            <p className="font-sans text-sm text-stone-600">
                                Un service client mis à votre disposition pour répondre à toutes vos questions.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </section>
        </div>
    );
}
