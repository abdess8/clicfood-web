import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-stone-50 pt-12 pb-24">
            {/* Header */}
            <div className="bg-stone-900 text-white py-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-zellige opacity-5 pointer-events-none" />
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <span className="uppercase tracking-[0.3em] text-clic-orange font-semibold text-sm mb-4 block font-sans">
                        Get In Touch
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="font-sans text-stone-300 max-w-2xl mx-auto text-lg">
                        We'd love to hear from you. Whether you have a question about our dishes, need help with ordering, or just want to share your Beldi experience.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                                <span className="bg-clic-orange/10 p-3 rounded-xl text-clic-orange">
                                    <MapPin className="w-6 h-6" />
                                </span>
                                Our Location
                            </h2>
                            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-clic-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">ClicFood Restaurant</h3>
                                <p className="font-sans text-stone-600 text-lg leading-relaxed">
                                    Rue de Taghazout<br />
                                    Casablanca 20230<br />
                                    Morocco
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-6 flex items-center gap-3">
                                <span className="bg-clic-purple/10 p-3 rounded-xl text-clic-purple">
                                    <Phone className="w-6 h-6" />
                                </span>
                                Call Us
                            </h2>
                            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
                                <p className="font-sans text-stone-600 mb-2 truncate">For orders and support:</p>
                                <a href="tel:0808663600" className="font-serif text-3xl font-bold text-clic-purple hover:text-clic-orange transition-colors">
                                    08 08 66 36 00
                                </a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Follow Our Story</h2>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/clicfood2022/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:border-clic-orange hover:shadow-md transition-all group flex items-center gap-3"
                                >
                                    <Instagram className="w-6 h-6 text-stone-400 group-hover:text-clic-orange transition-colors" />
                                    <span className="font-medium text-stone-600 group-hover:text-stone-900 transition-colors">Instagram</span>
                                </a>
                                <a
                                    href="https://www.facebook.com/Clicfood.sarl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:border-[#1877F2] hover:shadow-md transition-all group flex items-center gap-3"
                                >
                                    <Facebook className="w-6 h-6 text-stone-400 group-hover:text-[#1877F2] transition-colors" />
                                    <span className="font-medium text-stone-600 group-hover:text-stone-900 transition-colors">Facebook</span>
                                </a>
                                <a
                                    href="https://www.tiktok.com/@clicfood"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm hover:border-black hover:shadow-md transition-all group flex items-center gap-3"
                                >
                                    {/* Custom TikTok Icon SVG */}
                                    <svg className="w-6 h-6 text-stone-400 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                    <span className="font-medium text-stone-600 group-hover:text-stone-900 transition-colors">TikTok</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-clic-purple to-clic-orange opacity-10 rounded-bl-full pointer-events-none" />
                        <h2 className="font-serif text-3xl font-bold text-stone-800 mb-8 z-10 relative">Send a Message</h2>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                                <input type="text" id="subject" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all" placeholder="How can we help?" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                                <textarea id="message" rows={5} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-clic-orange/20 focus:border-clic-orange transition-all resize-none" placeholder="Your message..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-clic-purple to-clic-orange text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
