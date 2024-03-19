import Button from "../../components/Button";
import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete }) {
    return (
        <>
            <section>
                <div className="flex justify-between items-center mb-8">
                    <h2 className=" text-xl font-bold text-stone-700">Tasks</h2>
                    <Button color="default" variant="filled">+ Create Task</Button>
                </div>

                <NewTask onAdd={onAdd} />
                


                <p className="my-4 text-stone-800">This project does not have any tasks yet.</p>

                {/* TODO: Add task functionality  */}
                    
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>etc...</li>
                </ul>
            </section>
        </>
    )
}