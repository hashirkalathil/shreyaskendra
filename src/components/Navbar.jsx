"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactButton from './ui/ContactButton';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <div className={`fixed w-full flex justify-center z-100 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
                <nav className={`max-w-[1400px] flex items-center justify-between px-8 py-3 w-[95%] rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-white backdrop-blur-xl shadow-lg border border-white/20' : 'bg-white'}`}>

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative overflow-hidden rounded-xl">
                            <img src="/files/logo.png" alt="Shreyas Kendra Logo" className="h-12 md:h-14 object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-[15px] font-bold text-gray-700 hover:text-brand transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Section (Desktop) */}
                    <div className="hidden md:block">
                        <ContactButton
                            isWhatsApp={true}
                            message={"ശ്രേയസ് കേന്ദ്രയെ കുറിച്ച് കുടുതൽ അറിയണം"}
                        />
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-brand focus:outline-none relative z-110"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                                <span className={`w-full h-0.5 bg-brand rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-brand rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-brand rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-90 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 p-10">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-3xl font-black text-gray-900 hover:text-brand transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ContactButton
                        isWhatsApp={true}
                        message={"ശ്രേയസ് കേന്ദ്രയെ കുറിച്ച് കുടുതൽ അറിയണം"}
                    />
                </div>
            </div>
        </>
    );
}
