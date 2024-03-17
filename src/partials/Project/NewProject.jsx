import { useRef } from 'react';

import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'

export default function NewProject({ onAddingNewProject }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        // TODO: Validation

        onAddingNewProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    function handleCancel() {
        // TODO: Cancel
    }


    return (
        <div className="w-[35rem] mt-16 px-8">
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <Button
                        onClick={handleCancel}
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
                <Input ref={titleRef} label="Title" />
                <Input ref={descriptionRef} label="Description" isTextarea={true} />
                <Input ref={dueDateRef} label="Due Date" />
            </div>
        </div>
    )
}