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
        projects: [],
        tasks: [],
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
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            }

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            };
        });
    }

    /**
     * Handle the cancelling of adding a new project.
     */
    function handleCancelAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    /**
     * A function that handles the selection of a project.
     *
     * @param {type} id - the project id
     * @return {type} description of the updated projects state
     */
    function handleSelectProject(id) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    /**
     * A function that handles deleting a project.
     *
     * @param {void} None
     * @return {object} The updated projects state after deleting the selected project.
     */
    function handleDeleteProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
            };
        });
    }


    function handleAddTask() {
        // TODO: Add task functionality
    }

    function handleDeleteTask() {
        // TODO: Delete task functionality
    }




    console.log(projectsState);

    // Check the selectedProjectId to determine what content to render
    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

    let content = (
        <Project
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddNewTask={handleAddTask}
            onDeleteTask={handleDeleteTask}

        />
    );

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddingNewProject={handleAddProject} onCancelNewProject={handleCancelAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleNewProject} />;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar
                onStartAddProject={handleNewProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
            />
            
            {/* <Project /> */}
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