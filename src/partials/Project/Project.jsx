import Button from "../../components/Button";
import Tasks from "../Task/Tasks";

export default function Project({
    project,
    tasks,
    onDelete,
    onAddNewTask,
    onDeleteTask
}) {
    const formattedDate = new Date(project.dueDate).toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-[35rem] mt-16 px-8">
            <header className="mb-8">
                <div className="sm:flex sm:justify-between sm:items-center">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <Button onDelete={onDelete} color="danger" variant="text">Delete</Button>
                </div>
                <span className="mt-2 flex text-sm text-gray-500">{formattedDate}</span>
                {/* <button onClick={onDelete} className="flex items-center text-sm text-gray-500 hover:text-red-500 hover:bg-red-100 px-4 py-2 rounded transition-all duration-200 ease-in-out">Delete</button> */}
            </header>

            <div>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </div>

            <hr className="my-4" />

            <Tasks tasks={tasks} onAdd={onAddNewTask} onDelete={onDeleteTask} />
        </div>
    );
}