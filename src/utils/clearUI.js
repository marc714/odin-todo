import { clearBody } from "./clearBody";
import { clearProjects } from "./clearProjectList";
import { removeTaskBtn } from "./clearTaskButton";
import { removeProjectDeleteBtn } from "./clearDeleteProjectButton";

function clearUI(){
    clearBody(); //removes project header and tasks
    clearProjects(); //removes sidebar projects
    //removeTaskBtn(); //removes New Task button
    //removeProjectDeleteBtn(); //removes Delete Project button
}

export { clearUI }
