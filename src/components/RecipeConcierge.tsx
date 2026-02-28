"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, ChefHat, Sparkles } from "lucide-react";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

const INITIAL_MESSAGE: Message = {
    id: "init",
    role: "assistant",
    content: "Marhaba! I'm your Beldi Chef Concierge. What flavors are you craving today? I can recommend dishes or help you pair your meal.",
};

const SUGGESTIONS = [
    "Recommend a high-protein dinner.",
    "What is the most traditional dish?",
    "I need something quick (under 30 mins).",
];

export default function RecipeConcierge() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), role: "user", content: text };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate agentic response
        setTimeout(() => {
            let responseContent = "That sounds wonderful! Based on your preference, I highly recommend our Authentic Beef Tagine. It is rich in flavor and pairs beautifully with our homemade bread.";

            if (text.toLowerCase().includes("quick") || text.toLowerCase().includes("30 mins")) {
                responseContent = "For a quick yet authentic meal, our Vegetable Couscous takes only 30 minutes! It's pre-steamed and just needs a quick reheat with our savory broth.";
            } else if (text.toLowerCase().includes("protein")) {
                responseContent = "Our Lemon Chicken Tagine packs 48g of protein per serving while keeping absolute traditional authenticity. Would you like me to add it to your order?";
            }

            const agentMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: responseContent,
            };
            setMessages((prev) => [...prev, agentMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-clic-purple to-clic-orange text-white shadow-2xl flex items-center justify-center z-50 group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <ChefHat className="w-8 h-8 relative z-10" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                            className="absolute -top-1 -right-1"
                        >
                            <Sparkles className="w-4 h-4 text-yellow-300 relative z-10" />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-stone-100"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-clic-purple to-clic-orange p-4 text-white flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                    <ChefHat className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-lg leading-tight">Recipe Concierge</h3>
                                    <p className="text-xs font-sans text-white/80">Beldi AI Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 relative">
                            <div className="absolute inset-0 bg-zellige opacity-5 pointer-events-none" />

                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} relative z-10`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl font-sans text-sm shadow-sm ${msg.role === "user"
                                                ? "bg-stone-900 text-white rounded-tr-sm"
                                                : "bg-white text-stone-800 border border-stone-100 rounded-tl-sm"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start relative z-10"
                                >
                                    <div className="bg-white border border-stone-100 p-4 rounded-2xl rounded-tl-sm flex gap-2 w-16">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-stone-300 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-stone-300 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-stone-300 rounded-full" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-stone-100 shrink-0">
                            {/* Suggestions */}
                            {messages.length === 1 && (
                                <div className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-none">
                                    {SUGGESTIONS.map((suggestion, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSend(suggestion)}
                                            className="shrink-0 bg-stone-100 hover:bg-stone-200 text-stone-600 px-3 py-1.5 rounded-full text-xs font-sans transition-colors"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                                className="flex items-center gap-2 relative"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask the chef..."
                                    className="flex-1 bg-stone-100 border-none rounded-full py-3 pl-4 pr-12 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-clic-purple/20 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="absolute right-2 p-2 bg-clic-orange text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-clic-purple transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
