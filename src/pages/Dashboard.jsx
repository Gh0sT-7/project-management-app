import Sidebar from "../partials/Sidebar";
import Project from '../components/Project';

function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-12 w-full max-w-9xl mx-auto">
                        <Project />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;