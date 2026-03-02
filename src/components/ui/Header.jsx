export default function Header({ title, highlight, description }) {
    return (
        <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight local-font-anekmalayalam">
                {title} <span className="text-brand">{highlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
            <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto md:leading-relaxed leading-snug font-medium local-font-gayathri">
                {description}
            </p>
        </div>
    );
}