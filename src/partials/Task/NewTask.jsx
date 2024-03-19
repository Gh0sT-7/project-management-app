import { useState } from 'react';

import Input from "../../components/Input"

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask('');
        console.log(enteredTask);
    }

    return (
        <div className="flex items-center gap-4">
            <Input
                type="text"
                onChange={handleChange}
                value={enteredTask}
            />
            {/* <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" /> */}
            <button 
                onClick={handleClick}
                className="text-stone-700 hover:text-stone-950"
            >
                + Add Task
            </button>
        </div>
    )
}