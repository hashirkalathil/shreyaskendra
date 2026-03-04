export default function Servicebutton() {
        return (
    <Link href="#services">
        <button
            className="relative md:px-10 px-5 md:py-5 py-2 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-3 cursor-pointer"
            style={{
                background: 'linear-gradient(135deg, #fbbf24, #f97316)',
                color: '#1a0533',
                boxShadow: '0 4px 24px rgba(251,191,36,0.45), 0 0 0 0 rgba(251,191,36,0)',
                border: 'none',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(251,191,36,0.6)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(251,191,36,0.45)';
            }}
        >
            Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
    </Link>
)}