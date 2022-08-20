import { projectsArray } from "../../modules/taskArray";
import { updateLocalStorage } from "../../utils/localStorageUpdate";
import { refresh } from "../../utils/reloadUI";
import { clearUI } from "../../utils/clearUI";

function addDeleteProjectBtn (projectTitle) {  
    const myBody = document.querySelector('.delete-button-area')
    // button
    const projectRemove = document.createElement('button');
    projectRemove.classList.add('project-remove-button');
    projectRemove.textContent = "Delete Project";

    myBody.append(projectRemove);
    
    // modal
    const openBtn = document.querySelector('.project-remove-button');
    const projectModal = document.querySelector('#project-modal');
    // const closeBtn = document.querySelector('.close-modal');
    
    const confirmDelete = document.querySelector('.confirm-delete-project');
    const cancelDelete = document.querySelector('.cancel-delete-project');
    
    const appBody = document.querySelector('.app-body');
    
    openBtn.addEventListener('click', ()=> { 
        appBody.style.display = "none";
        projectModal.style.display = "grid"; 
        warningMessage(projectTitle);
    });

    cancelDelete.addEventListener('click', ()=> { 
        projectModal.style.display = "none";
        appBody.style.display = "grid";
        const warning = document.querySelector('.warning-text');
        warning.textContent = "";
    });

    // logic
    confirmDelete.addEventListener('click', ()=>{
        deleteProject(projectTitle);
        console.log("back to confirmDelete")
        // updateLocalStorage();
        projectModal.style.display = "none";
        appBody.style.display = "grid";
        // clearUI();
        // refresh("all");
    });
    
}

function warningMessage(projectTitle){
    const warning = document.querySelector('.warning-text');
    let myText = `Are you sure you want to delete: ${projectTitle}`;
    warning.append(myText);
}

// https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property
function deleteProject(projectTitle){
    if(projectTitle === "all"){
        console.log("can't delete ALL")
        return;
    } else {
        console.log(`project title: ${projectTitle}`);
        let delProjIndex = projectsArray.findIndex(obj => obj.project === projectTitle);
        console.log(`Project Name: ${projectTitle}`);
        console.log(`Project Index: ${delProjIndex}`);
        if(projectsArray[delProjIndex].project == projectTitle) {
            console.log('delete conditoin matches')
            console.log(projectsArray[delProjIndex].project);
            projectsArray.splice(delProjIndex, 1);
            updateLocalStorage();
        
            clearUI();
            refresh("all");
            return;
            //location.reload();
        }
    };

}


export { addDeleteProjectBtn } 