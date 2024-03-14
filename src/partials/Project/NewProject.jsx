import Input from '../../components/Input.jsx'

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16 px-8">
        <menu className='flex items-center justify-end gap-4 my-4'>
              <li><button className="text-gray-500 hover:text-red-500 hover:bg-red-50 px-4 py-2 rounded transition-all duration-200 ease-in-out">Cancel</button></li>
              <li><button className="text-gray-500 hover:text-green-500 hover:bg-green-50 px-4 py-2 rounded transition-all duration-200 ease-in-out">Save</button></li>
        </menu>

        <div>
            <Input label="Title" />
        <Input label="Description" isTextarea={true} />
            <Input label="Due Date" />
        </div>
    </div>
  )
}