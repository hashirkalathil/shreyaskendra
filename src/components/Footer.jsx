import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-400 py-20 px-6 font-sans relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-linear-to-r from-transparent via-brand/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & Story */}
                    <div className="w-full flex items-center justify-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <img src="/files/logo.png" alt="Shreyas Kendra Logo" className="h-16 object-contain brightness-110" />
                        </Link>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Explore</h4>
                        <nav className="flex flex-col space-y-4">
                            {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-500 hover:text-brand transition-all duration-300 flex items-center group"
                                >
                                    <span className="w-0 h-0.5 bg-brand mr-0 group-hover:w-3 group-hover:mr-2 transition-all"></span>
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Connect</h4>
                        <div className="space-y-4 text-sm font-medium">
                            <div className="flex items-start gap-4 group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="text-gray-500 leading-relaxed max-w-[200px]">Ground Floor, Ravipuram, Kochi, 682016</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-gray-500">shreyaskendra@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xs text-gray-600 font-medium">
                        © 2026 Shreyas Kendra. All Rights Reserved.
                    </div>
                    <div className="flex gap-8 md:text-[11px] text-[10px] font-black uppercase tracking-widest">
                        <Link href="#" className="hover:text-brand transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-brand transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
