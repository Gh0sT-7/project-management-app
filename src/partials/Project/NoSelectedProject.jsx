import noProjectImage from '../assets/no-projects.png'

export default function NoProjectSelected() {
    return (
        <div className="mt-24 w-2/3 text-center">
            <img className='object-contain w-16 h-16 mx-auto' src={noProjectImage} alt='Empty taks list' />
            <h2 className='my-4 text-xl font-bold text-stone-500'>No Project Selected.</h2>
            <p>Select a project or create a new one.</p>
            <p className='text-stone-400'>
                <button className='mt-6 px-4 py-2 rounded bg-slate-600 hover:bg-slate-700 text-xs md:text-base text-stone-200 hover:text-stone-50 font-semibold  transition-all duration-200 ease-in-out'>
                    + Create New Project
                </button>
            </p>
        </div>
    )
}