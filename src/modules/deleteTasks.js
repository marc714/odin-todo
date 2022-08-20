import { taskIndexSearch } from "./taskIndexSearch";
import { projectsArray } from "./taskArray";
import { updateLocalStorage } from "../utils/localStorageUpdate";
import { projectDisplay } from "./projectDisplay";
import { clearUI } from "../utils/clearUI";
import { getProjectList } from "./projectList";

/*
projectsArray = [
    {project: name, tasks: [{}, {}]}
    {project: name, tasks: [{}, {}]}
];
*/

function deleteTasks(taskID){
    let deleteArray = taskIndexSearch(taskID);
    let outter = deleteArray[0];
    let inner = deleteArray[1];
    console.log("deleteTasks outter: " + outter);
    console.log("deleteTasks inner: " + inner);
    projectsArray[outter].tasks.splice(inner, 1);

    updateLocalStorage();
    let currentProjectElement = document.querySelector('.project-title');
    let currentProjectName = currentProjectElement.dataset.projectName;
    
    clearUI();
    getProjectList();
    projectDisplay(currentProjectName);
}

export { deleteTasks };





