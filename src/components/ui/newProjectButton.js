import { projectsArray } from "../../modules/taskArray";
import { updateLocalStorage } from "../../utils/localStorageUpdate";
import { selectorButton } from "./modalProjectSelector";
import { clearBody } from "../../utils/clearBody";
import { clearProjects } from "../../utils/clearProjectList";
import { projectDisplay } from "../../modules/projectDisplay";
import { getProjectList } from "../../modules/projectList";
import { projectNameTest } from "../../modules/projectNameTest";
import { clearTaskExpand } from "../../utils/clearTaskExpand";


function projectNewBtn(){
    const projectBtn = document.querySelector('#new-project');
    projectBtn.addEventListener('click', ()=>{
        //checks if new project input field exists
        const doesElementExist = document.querySelector('.new-project-input');
        if (doesElementExist){
            console.log("project input field exists. please submit value")
        } else {
            // creates project input field
            const projectList = document.querySelector('.project-list');
            const projectField = document.createElement('input');
            projectField.setAttribute("type", "text")
            projectField.setAttribute("placeholder", "project")
            projectField.classList.add("new-project-input");
            projectList.append(projectField);

            projectField.addEventListener('keypress', (e)=> {
                if(e.key === 'Enter'){
                    console.log(projectField.value);
                    let tempObj = {};
                    tempObj['project'] = projectField.value;
                    tempObj['tasks'] = [];
                    projectsArray.push(tempObj);
                    console.log(projectsArray)
                    projectField.remove();
                    updateLocalStorage();
                    
                    //either add new Div or run projectList? Need to remove old projectList first.
                    //removeTaskBtn();
                    clearBody();
                    clearProjects();
                    clearTaskExpand();

                    // reload dashboard
                    selectorButton(); // adds new project to selector button
                    projectDisplay(projectField.value);
                    getProjectList();
                }
            })
        }
    })           
}

export { projectNewBtn }

// need to add logic if project name already exists. cap sens?