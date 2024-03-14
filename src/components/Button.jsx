export default function Button({ children, color, variant }) {
    const variantClasses = {
        filled: "px-4 py-2 rounded bg-slate-600 hover:bg-slate-700 text-xs md:text-base font-semibold transition-all duration-200 ease-in-out",
        outline: "px-4 py-2 rounded border border-slate-600 hover:bg-slate-600 hover:text-white text-xs md:text-base font-semibold transition-all duration-200 ease-in-out",
        text: "px-4 py-2 text-xs md:text-base font-semibold transition-all duration-200 ease-in-out",
    };

    const colorClasses = {
        default: "text-stone-200 hover:text-stone-50",
        danger: "text-red-500 bg-red-50 hover:bg-red-500 hover:text-white",
        success: "text-green-500 bg-green-50 hover:bg-green-500 hover:text-white",
    };

    const variantClassName = variantClasses[variant] || "";
    const colorClassName = colorClasses[color] || colorClasses.default;

    const buttonClasses = `${variantClassName} ${colorClassName}`;

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
}
