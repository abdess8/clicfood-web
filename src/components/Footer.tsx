import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-16 px-6 lg:px-12 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-5 bg-zellige pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="inline-block mb-6 relative hover:opacity-90 transition-opacity">
                        <img
                            src="/images/logo.png"
                            alt="ClicFood"
                            className="h-16 w-auto object-contain brightness-0 invert opacity-90" // Makes the colorful logo white for the dark footer
                        />
                    </Link>
                    <p className="font-sans text-sm leading-relaxed mb-6">
                        The Moroccan leader in ready-to-cook "Beldi" homemade meals. Experience the authentic taste of tradition with the highest standards of quality.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-clic-orange transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-clic-orange transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-clic-orange transition-colors"><Twitter className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Discover</h4>
                    <ul className="space-y-4 font-sans text-sm">
                        <li><Link href="/catalog" className="hover:text-clic-purple transition-colors">Our Menu</Link></li>
                        <li><Link href="/concept" className="hover:text-clic-purple transition-colors">The Beldi Story</Link></li>
                        <li><Link href="/quality" className="hover:text-clic-purple transition-colors">Hygiene Standards</Link></li>
                        <li><Link href="/recipes" className="hover:text-clic-purple transition-colors">Recipe Concierge</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Assistance</h4>
                    <ul className="space-y-4 font-sans text-sm">
                        <li><Link href="/faq" className="hover:text-clic-purple transition-colors">FAQ</Link></li>
                        <li><Link href="/shipping" className="hover:text-clic-purple transition-colors">Shipping & Delivery</Link></li>
                        <li><Link href="/terms" className="hover:text-clic-purple transition-colors">Terms of Service</Link></li>
                        <li><Link href="/privacy" className="hover:text-clic-purple transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
                    <ul className="space-y-4 font-sans text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-clic-orange shrink-0" />
                            <span>Rue de Taghazout, Casablanca 20230, Morocco</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-clic-orange shrink-0" />
                            <span>08 08 66 36 00</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-clic-orange shrink-0" />
                            <span>contact@clicfood.ma</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-stone-500 relative z-10">
                <p>&copy; {new Date().getFullYear()} ClicFood. All rights reserved.</p>
                <p className="mt-2 md:mt-0 items-center flex gap-2">
                    Made with ❤️ in Morocco
                </p>
            </div>
        </footer>
    );
}
