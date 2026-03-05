import Link from 'next/link';
import React from 'react';
import HeroContactButton from './hero/HeroContactButton';

export default function HomeHero() {
  return (
    <section id="home" className="relative pt-32 pb-10 md:px-6 px-0 min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[15%] h-[15%] bg-brand/10 rounded-full blur-[80px] animate-float"></div>

        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-brand-motif pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-10 text-center md:text-left md:bg-white bg-brand md:py-0 py-20 md:rounded-none rounded-t-2xl">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:bg-brand/5 bg-white/90 border border-brand/10 rounded-full animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span className="text-brand font-black tracking-widest md:text-sm text-xs uppercase local-font-anekmalayalam">
                Welcome to Shreyas Kendra
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] md:text-black text-white animate-fade-in-up delay-100 local-font-anekmalayalam">
              നിങ്ങളുടെ സ്വന്തം <br />
              <span className="bg-white md:bg-brand bg-clip-text text-transparent drop-shadow-sm font-black local-font-anekmalayalam">
                ഡിജിറ്റൽ ബിസിനസ്സ്
              </span> <br />
              ആരംഭിക്കാം
            </h1>

            <p className="md:text-xl text-lg md:text-gray-800 text-white leading-relaxed animate-fade-in-up delay-200 local-font-gayathri">
              കുറഞ്ഞ നിക്ഷേപത്തിൽ ഉയർന്ന വരുമാനം നേടാൻ മികച്ച അവസരം. കേരളത്തിലെ മികച്ച ഡിജിറ്റൽ നെറ്റ്‌വർക്കിൽ ഇന്നുതന്നെ പങ്കാളിയാകൂ.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 select-none animate-fade-in-up delay-400">
            <Link href="#services">
              <button
                className="relative md:bg-brand bg-white hover:bg-gray-50 md:text-white text-brand hover:text-brand border-2 border-brand md:px-10 px-5 md:py-5 py-2 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>

            <HeroContactButton
              isWhatsApp={true}
              message={"ശ്രേയസ് കേന്ദ്രയെ കുറിച്ച് കുടുതൽ അറിയണം"}
            />
          </div>
        </div>

        {/* Hero Image / Pedestal */}
        <div className="md:w-1/2 flex justify-center w-full animate-fade-in-right delay-500">
          <div className="relative group">
            <div className="relative p-4 md:p-8 backdrop-blur-sm rounded-[3rem] animate-float">
              <img
                src="/files/hero logo.png"
                alt="Shreyas Kendra Digital Services"
                className="relative rounded-[2.5rem] object-cover h-[350px] md:h-[500px] w-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Decorative Orbitals */}
            <div className="absolute -right-8 top-12 w-16 h-16 bg-brand/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -left-12 bottom-24 w-12 h-12 bg-purple-200/20 rounded-full blur-lg animate-float delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
