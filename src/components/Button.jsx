export default function Button({ children, varient }) {
    return (
        <button varient={varient} className="px-4 py-2 rounded bg-slate-600 hover:bg-slate-700 text-xs md:text-base text-stone-200 hover:text-stone-50 font-semibold  transition-all duration-200 ease-in-out">
            {children}
        </button>
    )
}