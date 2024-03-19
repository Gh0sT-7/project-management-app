import Button from "../../components/Button";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <>
            <section>
                <div className="flex justify-between items-center mb-8">
                    <h2 className=" text-xl font-bold text-stone-700">Tasks</h2>
                    <Button color="default" variant="filled">+ Create Task</Button>
                </div>

                <NewTask onAdd={onAdd} />
                


                {tasks.length === 0 && (
                    <p className="my-4 text-stone-800">This project does not have any tasks yet.</p>
                )}

                {tasks.length > 0 && (
                    <ul className="mt-8 p-4 rounded-md bg-stone-100">
                        {tasks.map((task) => (
                            <li key={task.id} className="flex justify-between items-center my-4">
                                <span>{task.text}</span>
                                <Button color="danger" variant="text">Clear Task</Button>
                            </li>
                        ))}
                    </ul>
                )}   
            </section>
        </>
    )
}