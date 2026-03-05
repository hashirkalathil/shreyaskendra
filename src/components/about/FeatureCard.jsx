export default function FeatureCard({ item }) {
    return (
        <div className="group md:p-8 p-4 md:bg-gray-50 bg-brand md:rounded-5xl rounded-3xl border-2 md:border-transparent border-brand hover:border-brand/10 hover:bg-brand hover:text-white hover:shadow-2xl transition-all duration-700 text-left relative overflow-hidden">
            <div className="absolute md:block hidden md:-right-4 -right-2 md:-top-4 -top-2 md:w-24 w-20 md:h-24 h-20 md:bg-brand bg-white group-hover:bg-white rounded-full group-hover:scale-150 transition-all duration-700"></div>
            <div className="md:w-14 w-10 md:h-14 h-10 md:bg-brand bg-white rounded-2xl flex items-center justify-center md:mb-6 mb-3 md:text-white text-brand group-hover:bg-brand group-hover:text-white transition-all duration-700">
                {item.icon}
            </div>
            <h3 className="font-black md:text-xl text-lg md:mb-3 mb-2 md:text-gray-900 text-white local-font-anekmalayalam group-hover:text-white">
                {item.title}
            </h3>
            <p className="md:text-gray-900 text-white/95 text-[17px] md:leading-relaxed font-medium group-hover:text-white">
                {item.description}
            </p>
        </div>
    )
}