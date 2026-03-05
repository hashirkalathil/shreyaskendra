"use client";

import React, { useState } from 'react';
import Header from './ui/Header';

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    const packages = [
        {
            id: 'freelance',
            name: 'Freelance Model',
            price: '5,000',
            description: 'ഓഫീസ് ഇല്ലാതെ പാർട്ട് ടൈം ആയി വീട്ടിലിരുന്ന് ചെയ്യാവുന്നത്.',
            features: [
                'ഓഫീസ് സൗകര്യം ഇല്ലാതെയും പ്രവർത്തിക്കാം',
                'കമ്മീഷൻ അടിസ്ഥാന വരുമാനം',
                'വീട്ടിൽ നിന്ന് മാർക്കറ്റിംഗ് മാത്രം ചെയ്താൽ മതി',
                'മാർക്കറ്റിങ് സപ്പോർട്ടും പ്രോസസ്സിങ്ങും'
            ],
            specialClass: 'md:order-1 order-2',
            isPopular: false
        },
        {
            id: 'main',
            name: 'Main Franchise',
            price: '25,000',
            description: 'സ്വന്തമായി ഡിജിറ്റൽ സർവീസ് സെന്റർ തുടങ്ങാൻ ആഗ്രഹിക്കുന്നവർക്ക്.',
            subPrice: '(* ₹25K / ₹30K / ₹35K പാക്കേജുകൾ ലഭ്യമാണ്)',
            features: [
                'സ്വന്തം ഡിജിറ്റൽ സർവീസ് സെന്റർ ആരംഭിക്കാം',
                'ഹൈ ഇൻകം സർവീസുകൾ',
                'വെബ്സൈറ്റ്, ടെക്നിക്കൽ സപ്പോർട്ട്, ട്രെയിനിംഗ് ഉൾപ്പെടുന്നു',
            ],
            specialClass: 'md:order-2 order-1',
            isPopular: true
        }
    ];

    const handleSelect = (pkg) => {
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `I want to select this package: ${selectedPackage.name}. %0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
        const whatsappUrl = `https://wa.me/917902995439?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setIsModalOpen(false);
        setFormData({ name: '', phone: '', email: '' });
    };

    return (
        <section id="pricing" className="py-24 px-6 bg-linear-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <Header title="ഫ്രാഞ്ചൈസി" highlight="പ്രധാന പാക്കേജുകൾ" description="" />
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative group p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col ${pkg.isPopular
                                    ? 'bg-white border-2 border-brand shadow-2xl scale-105 z-10'
                                    : 'bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:border-brand/20'
                                } ${pkg.specialClass}`}
                        >
                            {pkg.isPopular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                    Best Value
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-black transition-colors ${pkg.isPopular ? 'text-brand' : 'text-gray-400 group-hover:text-brand'}`}>
                                    {pkg.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mt-4">
                                    <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">₹{pkg.price}</span>
                                    <span className="text-gray-900 font-medium">മുതൽ</span>
                                </div>
                                <p className="mt-4 text-gray-900 leading-relaxed font-medium">
                                    {pkg.description}
                                </p>
                                {pkg.subPrice && (
                                    <p className="text-xs text-brand font-bold mt-2 italic">{pkg.subPrice}</p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-12 flex-1">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 group/item">
                                        <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand transition-colors">
                                            <span className="text-brand group-hover/item:text-white text-sm transition-colors">✔</span>
                                        </div>
                                        <span className="text-gray-900 font-medium group-hover/item:text-gray-900 transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleSelect(pkg)}
                                className={`w-full py-5 rounded-2xl font-black tracking-widest uppercase text-sm transition-all duration-300 shadow-lg active:scale-95 ${pkg.isPopular
                                        ? 'bg-brand text-white hover:bg-brand-dark shadow-brand/20'
                                        : 'bg-gray-50 text-brand border-2 border-brand/10 hover:border-brand hover:bg-brand hover:text-white'
                                    }`}
                            >
                                തിരഞ്ഞെടുക്കുക
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Selection Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="bg-brand p-8 text-white relative">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <span className="text-xs font-black uppercase tracking-widest opacity-70">Confirm Selection</span>
                            <h3 className="text-2xl font-black mt-2">
                                {selectedPackage?.name}
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            <div className="space-y-1">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="നിങ്ങളുടെ പേര്"
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="നിങ്ങളുടെ ഫോൺ നമ്പർ"
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="നിങ്ങളുടെ ഇമെയിൽ"
                                    className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-brand text-white font-black rounded-2xl shadow-xl shadow-brand/20 hover:bg-brand-dark hover:-translate-y-1 transition-all duration-300"
                            >
                                Submit & Chat on WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
