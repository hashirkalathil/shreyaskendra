export default function ServiceCard({ icon, title, description, isHovered = false }) {

    const containerClasses = isHovered
        ? "bg-[#92278f] text-white border-[#92278f] scale-[1.02]"
        : "bg-gray-100 hover:bg-[#92278f] group transition-all duration-500 text-gray-800 border-transparent shadow-sm hover:shadow-2xl hover:text-white";

    const accentClasses = isHovered
        ? "bg-white"
        : "bg-[#92278f] group-hover:bg-white";

    const iconBgClasses = isHovered
        ? "bg-white text-[#92278f]"
        : "bg-white text-[#92278f] group-hover:bg-white group-hover:text-[#92278f]";

    const titleClasses = isHovered
        ? "text-white"
        : "text-gray-900 group-hover:text-white";

    const descClasses = isHovered
        ? "text-white"
        : "text-gray-600 group-hover:text-white";

    const linkClasses = isHovered
        ? "text-white"
        : "text-[#92278f] group-hover:text-white";

    return (
        <div className={`relative md:px-10 px-5 md:py-5 py-2 md:rounded-[2.5rem] rounded-3xl flex flex-col items-start md:min-h-[320px] min-h-[180px] transition-all duration-500 ease-out border-2 ${containerClasses}`}>

            {/* Left Accent Bar */}
            <div className={`absolute left-0 top-12 accent-bar ${accentClasses}`}></div>

            {/* Icon Circle */}
            <div className={`md:w-16 w-10 md:h-16 h-10 p-2 md:p-0 rounded-full flex items-center justify-center md:text-3xl text-xl md:mb-10 mb-3 mt-2 shadow-sm transition-all duration-500 ${iconBgClasses}`}>
                {icon}
            </div>

            {/* Content */}
            <div className="flex-1">
                <h3 className={`md:text-2xl text-xl font-black md:mb-4 mb-3 leading-tight transition-colors ${titleClasses}`}>
                    {title}
                </h3>

                <p className={`md:text-[16px] text-sm md:leading-relaxed transition-colors ${descClasses}`}>
                    {description}
                </p>
            </div>

        </div>
    );
}