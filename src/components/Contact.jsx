"use client";

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/917902995439?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');

        // Optional: Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <section id="contact" className="py-24 px-6 bg-brand text-white overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Contact Information Side */}
                <div className="space-y-10 animate-fade-in-up">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight local-font-anekmalayalam">
                            നിങ്ങളുടെ ഡിജിറ്റൽ വരുമാന കേന്ദ്രം <span className="text-purple-300">ഇന്ന് തന്നെ ആരംഭിക്കൂ!</span>
                        </h2>
                        <p className="text-purple-100 text-lg leading-relaxed font-medium">
                            കൂടുതൽ വിവരങ്ങൾക്കും ഫ്രാഞ്ചൈസി എടുക്കുന്നതിനുമായി ഞങ്ങളെ ബന്ധപ്പെടുക. നിങ്ങളുടെ എല്ലാ സംശയങ്ങൾക്കും മറുപടി നൽകാൻ ഞങ്ങൾ തയ്യാറാണ്.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start group">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-white/20 transition-colors">
                                <MapPinIcon />
                            </div>
                            <div>
                                <p className="text-purple-200 leading-relaxed max-w-sm">Ground Floor of Building No. 3100, Ward No. 2013/61, Manikath Road, Ravipuram, Kochi, Ernakulam, 682016</p>
                            </div>
                        </div>

                        <div className='flex items-center group'>
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-white/20 transition-colors">
                                <PhoneIcon />
                            </div>
                            <div>
                                <p className="text-purple-200 text-lg group-hover:text-white transition-colors">+91 790 299 5439</p>
                            </div>
                        </div>

                        <div className="flex items-center group">
                            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-white/20 transition-colors">
                                <MailIcon />
                            </div>
                            <div>
                                <p className="text-purple-200 text-lg">shreyaskendra@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <div className="bg-white text-gray-900 p-10 md:p-12 rounded-[3rem] shadow-2xl relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <svg width="120" height="120" viewBox="0 0 100 100" className="text-brand">
                            <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <h3 className="text-3xl font-black mb-8 text-black tracking-tight">
                        Contact Us
                    </h3>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-700 ml-1">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-700 ml-1">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Subject field */}
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-700 ml-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900"
                                placeholder="How can we help?"
                                required
                            />
                        </div>

                        {/* Message field */}
                        <div className="space-y-1">
                            <label className="text-xs font-black uppercase tracking-widest text-gray-700 ml-1">Your Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand focus:bg-white rounded-2xl outline-none transition-all font-bold text-gray-900 resize-none"
                                placeholder="Tell us more..."
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-brand hover:bg-brand-dark text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-brand/20 hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-widest text-sm group"
                        >
                            Send Message
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>

                    <p className="text-sm font-medium text-center text-gray-700 mt-6">
                        Your information will be kept <span className="text-gray-800 font-bold">100% confidential.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}

function MapPinIcon() {
    return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}
