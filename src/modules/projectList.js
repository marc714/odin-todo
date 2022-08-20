// displays all clickable project names in <sidebar> 
import { projectsArray } from "./taskArray";
import { projectDisplay } from '../modules/projectDisplay';
import { clearBody } from '../utils/clearBody';
import { taskBtn } from '../components/ui/newTaskButton';
import { addDeleteProjectBtn } from "../components/ui/addDeleteProjectButton";
import { removeProjectDeleteBtn } from "../utils/clearDeleteProjectButton";
import { deleteProject } from "./deleteProject";
import { updateLocalStorage } from "../utils/localStorageUpdate";
import { clearProjects } from "../utils/clearProjectList";
import { clearTaskExpand } from "../utils/clearTaskExpand";

function getProjectList(){
    const projectList = document.querySelector('.project-list');

    projectsArray.forEach( projectObj => {
        const newDiv = document.createElement('div');
        newDiv.classList.add("project-name-container")
        const newLink = document.createElement('a')
        const project = projectObj['project'];
        
        // newDiv.textContent = project;
        newLink.textContent = project;
        newLink.addEventListener('click', ()=>{
            clearBody(); // clear old tasks 
            clearTaskExpand(); // clear task expand field if exists            
            taskBtn(); // add New Task Button
            projectDisplay(project);

            //add delete project button asigned to clicked project
           // removeProjectDeleteBtn();
            //addDeleteProjectBtn(project);
        })
        newDiv.append(newLink)

        // delete button
        const newDelete = document.createElement('button');
        newDelete.setAttribute('type', 'button');
        newDelete.classList.add("material-icons");
        newDelete.textContent = "folder_delete";
        newDelete.onclick = function(){
            console.log("Deleting " + project);
            deleteProject(project);
            updateLocalStorage();
            
            //body
            clearBody();
            clearTaskExpand();
            taskBtn();
            projectDisplay("all");

            //sidebar
            clearProjects();
            getProjectList();


        }
        newDiv.append(newDelete)

        projectList.append(newDiv);
    })

    // add ALL to the top.
    const allProjectNewDiv = document.createElement('div');
    const allProject = document.createElement('a');
    allProjectNewDiv.classList.add("project-name-container");
    allProject.textContent = "all";
    allProject.addEventListener('click', ()=> {
        clearBody();
        clearTaskExpand();
        taskBtn();
        projectDisplay("all");

    });
    allProjectNewDiv.append(allProject)
    projectList.prepend(allProjectNewDiv);

}

export { getProjectList } 