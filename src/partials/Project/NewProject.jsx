import Input from '../../components/Input.jsx'
import Button from '../../components/Button.jsx'

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16 px-8">
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><Button variant="text" color="danger">Cancel</Button></li>
                <li><Button variant="text" color="success">Save</Button></li>
            </menu>

            <div>
                <Input label="Title" />
                <Input label="Description" isTextarea={true} />
                <Input label="Due Date" />
            </div>
        </div>
    )
}