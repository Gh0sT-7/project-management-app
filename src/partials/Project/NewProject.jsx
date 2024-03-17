import { useRef } from 'react';

import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'
import Modal from '../../components/Modal.jsx';

export default function NewProject({ onAddingNewProject, onCancelNewProject }) {
    const modal = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        // Validation
        if (
            enteredTitle.trim().length === 0 ||
            enteredDescription.trim().length === 0 ||
            enteredDueDate.trim().length === 0
        ) {
            modal.current.open();
            return;
        }

        // Data Shape
        onAddingNewProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className='text-xl font-bold text-stone-700'>Invalid Input</h2>
                <p className='text-stone-600 mt-2'>You didn't fill in all the fields!</p>
                <p className='text-stone-600'>Please make sure you provide a valid title, description and due date.</p>
            </Modal>
            <div className="w-[35rem] mt-16 px-8">
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <Button
                            onClick={onCancelNewProject}
                            color="danger"
                            variant="text"
                            >
                            Cancel
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={handleSave}
                            color="success"
                            variant="text"
                            >
                            Save
                        </Button>
                    </li>
                </menu>

                <div>
                    <Input ref={titleRef} label="Title" type="text" />
                    <Input ref={descriptionRef} label="Description" isTextarea={true} />
                    <Input ref={dueDateRef} label="Due Date" type="date" />
                </div>
            </div>
        </>
    )
}