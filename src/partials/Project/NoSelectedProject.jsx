import noProjectImage from '../../assets/no-projects.png'
import Button from '../../components/Button'

export default function NoProjectSelected() {
    return (
        <div className="flex flex-col gap-4 mt-24 w-2/3 text-center ">
            <img className='object-contain w-16 h-16 mx-auto' src={noProjectImage} alt='Empty taks list' />
            <h2 className='text-xl font-bold text-stone-500'>No Project Selected.</h2>
            <p className='text-stone-400'>Select a project or create a new one.</p>
            <p>
                <Button variant="filled" color="default">
                    + Create New Project
                </Button>
            </p>
        </div>
    )
}