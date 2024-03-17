import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Project from '../partials/Project/Project';
import NewProject from "../partials/Project/NewProject";
import NoProjectSelected from "../partials/Project/NoSelectedProject";

function Dashboard() {

    // Setting up state for the projects. SelectedProjectId is used to determine what content to render.
    // An object with a selectedProjectId and an array of projects is returned.
    // This allows the component to kep track of the selected project and list of projects.
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    /**
     * Handles the new project action.
     *
     * @return {object} The updated projects state
     */
    function handleNewProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    /**
     * A function that handles adding a new project to the projects state.
     *
     * @param {Object} projectData - The data of the project to be added (title, description, due date).
     * @return {Object} The updated projects state with the new project added.
     */
    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: Math.random()
            }

            return {
                ...prevState,
                projects: [...prevState.projects, newProject]
            };
        });
    }

    console.log(projectsState);

    // Check the selectedProjectId to determine what content to render
    let content;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddingNewProject={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleNewProject} />;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar onStartAddProject={handleNewProject} />
            
            {content}

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