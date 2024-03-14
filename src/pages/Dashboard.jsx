import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Project from '../partials/Project/Project';
import NewProject from "../partials/Project/NewProject";
import NoProjectSelected from "../partials/Project/NoSelectedProject";

function Dashboard() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleNewProject() {
        setProjectsState(prevState => {
            return {
                selectedProjectId: null,
            };
        });
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            {/* <NewProject /> */}
            <NoProjectSelected />

            {/* <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-12 w-full max-w-9xl mx-auto">
                        <Project />
                    </div>
                </main>
            </div> */}
        </div>
    );
}

export default Dashboard;