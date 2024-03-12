import Input from './Input.jsx'

export default function NewProject() {
  return (
    <div>
        <menu>
              <li><button className="text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 px-4 py-2 rounded transition-all duration-200 ease-in-out">Cancel</button></li>
              <li><button className="text-sm text-gray-500 hover:text-green-500 hover:bg-green-50 px-4 py-2 rounded transition-all duration-200 ease-in-out">Save</button></li>
        </menu>

        <div>
            <Input label="Title" />
            <Input label="Description" textarea={true} />
            <Input label="Due Date" />
        </div>
    </div>
  )
}