// used at startup. check if localstorage is empty, if empty push demo array to it.
// if not empty, then pull localStorage info

import { projectsArray, setProjectsArray } from "../modules/taskArray"

function localStorageCheck(){
    if(localStorage.getItem("projectArrayStorage") === null){
        localStorage.setItem("projectArrayStorage", JSON.stringify(projectsArray))
    } else {
        let temp = JSON.parse(localStorage.getItem("projectArrayStorage"));
        setProjectsArray(temp);
    }
};

export { localStorageCheck }