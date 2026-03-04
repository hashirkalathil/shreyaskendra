import React from 'react';
import Header from '@/components/ui/Header';
import ServiceCard from '@/components/services/ServiceCard';
import JanaSevanaIcon from '@/components/services/icons/JanaSevanaIcon';
import VehicleLoanIcon from '@/components/services/icons/VehicleLoanIcon';
import LandIcon from '@/components/services/icons/LandIcon';
import AdmissionIcon from '@/components/services/icons/AdmissionIcon';
import BankingIcon from '@/components/services/icons/BankingIcon';
import OtherServicesIcon from '@/components/services/icons/OtherServicesIcon';

export default function Services() {
    return (
        <section id="services" className="py-14 md:py-24 px-6 bg-brand-motif relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Brand Header Panel */}
                <div className="text-center md:mb-20 mb-10 flex flex-col items-center animate-fade-in-up">
                    <Header title="പ്രധാന" highlight="സർവീസുകൾ" />
                </div>

                {/* Services Grid (3x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-3 local-font-anekmalayalam">

                    {/* Card 1: Jana Sevana (Forced Hover Visualization) */}
                    <ServiceCard
                        image="/services/jana-sevana.png"
                        icon={<JanaSevanaIcon />}
                        title="ജനസേവന കേന്ദ്രം"
                        description="എല്ലാവിധ സർക്കാർ ഓൺലൈൻ സേവനങ്ങളും ഒരൊറ്റ പ്ലാറ്റ്ഫോമിൽ. ഓൺലൈൻ ട്രെയിനിങ്ങും തുടർച്ചയായ സപ്പോർട്ടും ലഭ്യമാണ്."
                    />

                    {/* Card 2: Vehicle Loan */}
                    <ServiceCard
                        image="/services/vehicle-loan.png"
                        icon={<VehicleLoanIcon />}
                        title="വാഹന ലോൺ (Car loan & Commercial Vehicle Loan)"
                        description="New Car, Used Car, Re-Finance, Top-Up Loans, കൂടാതെ Commercial Vehicle Loans."
                    />

                    {/* Card 3: Land Tharamataram */}
                    <ServiceCard
                        image="/services/admission-support.png"
                        icon={<AdmissionIcon />}
                        title="Admission Support (Higher Studies)"
                        description="Higher Studies, Credit Transfer, Online Courses"
                    />

                    {/* Card 4: Admission Support */}
                    <ServiceCard
                        image="/services/land-services.png"
                        icon={<LandIcon />}
                        title="ഭൂമി തരംമാറ്റൽ സേവനങ്ങൾ"
                        description="Data Bank-ൽ ഉൾപ്പെട്ട ഭൂമികൾ ഉൾപ്പെടെ വേഗത്തിൽ പ്രോസസ്സ് ചെയ്യുന്നു. അപേക്ഷ നിരസിച്ച കേസുകൾക്കും പരിഹാര മാർഗങ്ങൾ."
                    />

                    {/* Card 5: Financial Services */}
                    <ServiceCard
                        image="/services/financial-services.png"
                        icon={<BankingIcon />}
                        title="Financial & Banking Services"
                        description="Mini ATM, Money Transfer, പ്രമുഖ ബാങ്കുകളുടെ Insurance Products, Stock market Investment Plans."
                    />

                    {/* Card 6: Other Services */}
                    <ServiceCard
                        image="/services/other-services.png"
                        icon={<OtherServicesIcon />}
                        title="മറ്റ് സർവീസുകൾ"
                        description="GST Filing, ISO Certification, Trade Mark Registration, Loan Project Report, Ticket Booking, Matrimonial Services."
                    />
                </div>
            </div>
        </section>
    );
}