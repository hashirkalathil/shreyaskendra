"use client"
import Link from "next/link";

export default function HeroContactButton({ message, isWhatsApp = false }) {
    const buttonClass = "relative md:bg-brand bg-white hover:bg-gray-50 md:text-white text-brand hover:text-brand border-2 border-brand md:px-10 px-5 md:py-5 py-2 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 cursor-pointer active:scale-95 shadow-lg shadow-brand/20";

    const handleWhatsAppClick = () => {
        if (isWhatsApp && message) {
            try {
                const phoneNumber = "917902995439";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            } catch (e) {
                console.error("Failed to decode WhatsApp message", e);
            }
        }
    };

    if (isWhatsApp) {
        return (
            <div onClick={handleWhatsAppClick} className="relative group/btn cursor-pointer">
                <div className="absolute -inset-1 bg-brand rounded-full opacity-0 blur group-hover/btn:opacity-20 transition duration-500"></div>
                <button className={buttonClass}>
                    Contact Us
                </button>
            </div>
        );
    }

    return (
        <Link href="#contact" className="relative group/btn">
            <div className="absolute -inset-1 bg-brand rounded-full opacity-0 blur group-hover/btn:opacity-20 transition duration-500"></div>
            <button className={buttonClass}>
                Contact Us
            </button>
        </Link>
    );
}
