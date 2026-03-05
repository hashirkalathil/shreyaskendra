export default function ServiceCard({ icon, title, description, image, isHovered = false }) {

    const containerClasses = isHovered
        ? "bg-[#92278f] text-white border-[#92278f] scale-[1.02]"
        : "bg-white hover:bg-[#92278f] group transition-all duration-500 text-gray-900 border-gray-100 shadow-lg hover:shadow-2xl hover:text-white";

    const accentClasses = isHovered
        ? "bg-white"
        : "bg-[#92278f] group-hover:bg-white";

    const iconBgClasses = isHovered
        ? "bg-white text-[#92278f]"
        : "bg-white text-[#92278f] group-hover:bg-white group-hover:text-[#92278f]";

    const titleClasses = isHovered
        ? "text-white"
        : "text-black group-hover:text-white";

    const descClasses = isHovered
        ? "text-white"
        : "text-black group-hover:text-white";

    return (
        <div className={`relative flex flex-col items-start md:rounded-[2.5rem] rounded-3xl overflow-hidden transition-all duration-500 ease-out border-2 ${containerClasses}`}>

            {/* Image Section */}
            {image && (
                <div className="w-full aspect-8/10 overflow-hidden relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                </div>
            )}

            <div className="relative w-full md:px-10 px-6 pb-10 pt-8 flex-1">
                {/* Left Accent Bar */}
                <div className={`absolute left-0 top-10 accent-bar ${accentClasses}`}></div>

                {/* Icon Circle */}
                <div className={`md:w-16 w-12 md:h-16 h-12 rounded-full flex items-center justify-center md:text-3xl text-xl mb-6 shadow-md transition-all duration-500 absolute -top-8 left-10 ${iconBgClasses}`}>
                    {icon}
                </div>

                {/* Content */}
                <div className="mt-4">
                    <h3 className={`md:text-2xl text-xl font-black md:mb-4 mb-3 leading-tight transition-colors ${titleClasses}`}>
                        {title}
                    </h3>

                    <p className={`text-[16.5px] md:leading-relaxed transition-colors ${descClasses}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
