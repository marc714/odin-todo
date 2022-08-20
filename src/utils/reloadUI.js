import { projectDisplay } from "../modules/projectDisplay";
import { taskBtn } from "../components/ui/newTaskButton";
import { getProjectList } from "../modules/projectList";
import { projectNewBtn } from "../components/ui/newProjectButton";
import { addDeleteProjectBtn } from "../components/ui/addDeleteProjectButton";

function refresh(projectTitle){
    //main body
    projectDisplay(projectTitle); // has projectHeader in it
    taskBtn();
    addDeleteProjectBtn(projectTitle);
    
    //sidebar
    getProjectList();
    projectNewBtn();
    
}

export { refresh }