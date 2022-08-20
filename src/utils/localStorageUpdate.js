// pushes current array data to local storage
import { projectsArray } from "../modules/taskArray";

function updateLocalStorage(){
    localStorage.setItem("projectArrayStorage", JSON.stringify(projectsArray));
};

export { updateLocalStorage };

