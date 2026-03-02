import Link from "next/link";

export default function ContactButton() {
    return (
        <Link href="#contact">
            <button
                className="relative bg-brand hover:bg-gray-50 text-white hover:text-brand border-2 border-brand md:px-10 px-5 md:py-5 py-2 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
                Contact Us
            </button>
        </Link>
    )
}