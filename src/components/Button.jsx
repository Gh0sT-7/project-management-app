export default fucntion Button({ children, varient }) {
    return (
        <button varient={varient} className="text-gray-500 hover:text-red-500 hover:bg-red-50 px-4 py-2 rounded transition-all duration-200 ease-in-out">
            {children}
        </button>
    )
}