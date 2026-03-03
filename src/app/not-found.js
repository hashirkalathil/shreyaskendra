import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            {/* Immersive Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-200/20 rounded-full blur-[100px]"></div>

                {/* Subtle Brand Motif Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-brand-motif"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl space-y-12">
                {/* Animated 404 Header */}
                <div className="relative inline-block">
                    <h1 className="text-[12rem] md:text-[18rem] font-black leading-none bg-linear-to-b from-brand to-purple-600 bg-clip-text text-transparent opacity-10 blur-sm absolute inset-0 select-none">
                        404
                    </h1>
                    <h2 className="text-8xl md:text-9xl font-black leading-none bg-linear-to-r from-brand to-purple-500 bg-clip-text text-transparent drop-shadow-2xl animate-float">
                        404
                    </h2>
                </div>

                <div className="space-y-6 animate-fade-in-up">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 local-font-anekmalayalam">
                        പേജ് കണ്ടെത്തിയില്ല
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed local-font-gayathri font-medium">
                        നിങ്ങൾ തിരയുന്ന ലിങ്ക് ലഭ്യമായിട്ടില്ല. ദയവായി താഴെ കാണുന്ന ബട്ടണിലൂടെ ഹോം പേജിലേക്ക് തിരിച്ചു പോകുക.
                    </p>
                </div>

                {/* Action Button */}
                <div className="animate-fade-in-up delay-200">
                    <Link href="/">
                        <button className="relative px-12 py-5 bg-brand text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand border-2 border-brand transition-all duration-300 shadow-2xl shadow-brand/30 active:scale-95 group">
                            Back to Home
                            <span className="absolute inset-0 rounded-full bg-brand blur-md -z-10 opacity-20 group-hover:opacity-40 transition-opacity"></span>
                        </button>
                    </Link>
                </div>

                {/* Decorative Floating Elements */}
                <div className="absolute -left-20 top-20 w-32 h-32 bg-brand/5 rounded-full blur-xl animate-float"></div>
                <div className="absolute -right-16 bottom-16 w-24 h-24 bg-purple-200/20 rounded-full blur-lg animate-float delay-1000"></div>
            </div>
        </div>
    );
}
