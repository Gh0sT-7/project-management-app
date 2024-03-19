import { useRef, useState } from 'react';

import Input from "../../components/Input"
import Modal from '../../components/Modal';

export default function NewTask({ onAdd }) {
    const modal = useRef();

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim().length === 0) {
            modal.current.open();
        } {
            onAdd(enteredTask);
            setEnteredTask('');
            console.log(enteredTask);
            return;
        }
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className='text-xl font-bold text-stone-700'>Invalid Input</h2>
                <p className='text-stone-600 mt-2'>The task field cannot be empty.</p>
            </Modal>
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
                    Add Task
                </button>
            </div>
        </>
        
    )
}