export default function Header({ title, highlight, description, secondaryDescription }) {
    return (
        <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight local-font-anekmalayalam text-center">
                {title} <span className="text-brand">{highlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
            <div className="space-y-4 max-w-4xl mx-auto text-center">
                <p className="text-gray-600 text-lg md:text-xl md:leading-relaxed leading-snug font-medium local-font-gayathri">
                    {description}
                </p>
                {secondaryDescription && (
                    <p className="text-gray-500 text-base md:text-lg md:leading-relaxed leading-snug font-medium italic border-t border-gray-100 pt-4 mt-4">
                        {secondaryDescription}
                    </p>
                )}
            </div>
        </div>
    );
}
