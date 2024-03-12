export default function Project() {
    return (
        <>
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold">Project Name</h1>
                    <span className="mt-2 flex text-md text-gray-500">Date Added</span>
                </div>
                <button className="flex items-center text-sm text-gray-500 hover:text-red-500 hover:bg-red-100 px-4 py-2 rounded transition-all duration-200 ease-in-out">Delete</button>
            </div>

            <div>

                <p>Description</p>
                <p>Description</p>
            </div>

            <hr className="my-4" />

            <h2 className="mb-4 text-xl font-bold">Tasks</h2>

            <form>
                <input type="text" placeholder="Task name" />
                <button>Add task</button>
            </form>

            <p>This project does not have any tasks yet.</p>
        </>
    );
}