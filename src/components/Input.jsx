import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
    const formClasses = "w-full shadow border rounded px-3 py-2 leading-tight text-stone-700 bg-stone-200 border-stone-300 focus:outline-none focus:border-stone-600 transition-all duration-200 ease-in-out";

    return (
       <p className="flex flex-col gap-2 my-4">
           <label className="text-sm font-semibold text-gray-600">{label}</label>
            {isTextarea ? <textarea ref={ref} className={formClasses} {...props} /> : <input ref={ref} className={formClasses} {...props} />}
       </p>
    );
});

export default Input;