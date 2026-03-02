import Link from 'next/link';
import React from 'react';
import FeatureCard from '@/components/about/FeatureCard';
import ContactButton from '@/components/ui/ContactButton';
import Header from '@/components/ui/Header';

export default function About() {

  const featureCardItems = [
    {
      title: "കുറഞ്ഞ നിക്ഷേപം",
      description: "വളരെ ചെറിയ മുതൽമുടക്കിൽ സ്വന്തം ബിസിനസ്സ് ആരംഭിക്കാൻ അവസരം.",
      icon: <InvestmentIcon />
    },
    {
      title: "ഉയർന്ന വരുമാനം",
      description: "മികച്ച കമ്മീഷൻ ലഭിക്കുന്ന ഹൈ-ഇൻകം സർവീസുകൾ.",
      icon: <IncomeIcon />
    },
    {
      title: "പൂർണ്ണ പിന്തുണ",
      description: "സമഗ്രമായ ഓൺലൈൻ ട്രെയിനിംഗും, തുടർച്ചയായ ടെക്നിക്കൽ & പ്രോസസ്സിംഗ് സപ്പോർട്ടും.",
      icon: <SupportIcon />
    },
    {
      title: "എളുപ്പ രീതി",
      description: "ഫ്രാഞ്ചൈസികൾക്ക് മാർക്കറ്റിംഗ് മാത്രം ശ്രദ്ധിച്ചാൽ മതി, പ്രോസസ്സിംഗ് ഞങ്ങൾ പിന്തുണയ്ക്കും.",
      icon: <WorkflowIcon />
    }
  ]



  return (
    <section id="about" className="py-14 md:py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center space-y-12">

        {/* Section Header */}
        <div className="space-y-4 animate-fade-in-up">
          <Header
            title="എന്തുകൊണ്ട്"
            highlight="ശ്രേയസ് കേന്ദ്രം?"
            description="എറണാകുളം കേന്ദ്രമാക്കി 2021 മുതൽ പ്രവർത്തിച്ചു വരുന്ന ശ്രേയസ് കേന്ദ്രം, ജനസേവന കേന്ദ്രത്തിന്റെ ആശയത്തോടൊപ്പം ഉയർന്ന വരുമാന സാധ്യതയുള്ള വിവിധ സർവീസുകൾ ഉൾപ്പെടുത്തിയ ഒരു സമഗ്ര ഡിജിറ്റൽ നെറ്റ്‌വർക്കാണ്."
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 md:pt-8 pt-4">


          {featureCardItems.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="md:mt-20 mt-10 group relative overflow-hidden rounded-3xl">
          <div className="relative md:p-16 flex flex-col items-center md:gap-8 gap-2">
            <h4 className='text-gray-900 font-black local-font-gayathri text-2xl md:text-4xl leading-tight max-w-4xl text-center'>
              നിങ്ങളുടെ സ്വന്തമായ <span className="text-brand inline-block transition-transform cursor-default">ഡിജിറ്റൽ വരുമാന കേന്ദ്രം</span> ആരംഭിക്കാൻ ഇന്ന് തന്നെ ബന്ധപ്പെടൂ.
            </h4>

            <div className="flex flex-col items-center gap-6">
              <div className="md:flex hidden w-32 h-1.5 bg-brand/20 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-brand rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
              </div>

              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InvestmentIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IncomeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );
}

