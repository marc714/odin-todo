import { projectsArray } from "./taskArray";


function deleteProject(projectTitle){
    
        console.log(`project title: ${projectTitle}`);
        
        let delProjIndex = projectsArray.findIndex(obj => obj.project === projectTitle);
        console.log(`Project Name: ${projectTitle}`);
        console.log(`Project Index: ${delProjIndex}`);
        
        if(projectsArray[delProjIndex].project == projectTitle) {
            console.log('delete conditoin matches')
            console.log(projectsArray[delProjIndex].project);
            projectsArray.splice(delProjIndex, 1);
            // updateLocalStorage();
        
            // clearUI();
            // refresh("all");
            
            //location.reload();
            return;
        };

}

export { deleteProject }