export default function Button({ children, color, variant, ...props }) {
    const variantClasses = {
        filled: "px-4 py-2 rounded bg-slate-600 hover:bg-slate-700 text-xs md:text-base font-semibold translate-x-0 hover:-translate-y-0.5 transition-all duration-200 ease-in-out",
        filledHighlight: "px-4 py-2 rounded bg-slate-700 text-xs md:text-base font-semibold -translate-y-0.5 transition-all duration-200 ease-in-out",
        outline: "px-4 py-2 rounded border border-slate-600 hover:bg-slate-600 hover:text-white text-xs md:text-base font-semibold translate-x-0 hover:-translate-y-0.5 transition-all duration-200 ease-in-out",
        text: "px-4 py-2 rounded text-xs md:text-base font-semibold translate-x-0 hover:-translate-y-0.5 transition-all duration-200 ease-in-out",
    };

    const colorClasses = {
        default: "text-stone-200 hover:text-stone-50 hover:shadow-lg hover:shadow-stone-500/20",
        defaultHighlight: "text-stone-50 shadow-lg shadow-stone-500/20",
        danger: "text-red-500 bg-red-50 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20",
        success: "text-green-500 bg-green-50 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-500/20",
    };

    const variantClassName = variantClasses[variant] || "";
    const colorClassName = colorClasses[color] || colorClasses.default;

    const buttonClasses = `${variantClassName} ${colorClassName}`;

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
}
