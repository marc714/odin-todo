//module finds all project names
// you must invoke this every time a new project is created/deleted.

import { projectsArray } from "../../modules/taskArray";
import { taskIndexSearch } from "../../modules/taskIndexSearch";

const selectorButton = () => {
    // for New Task button
    const modalSelectProject = document.querySelector('#select-project').options;
    // for task expand field
    // const taskExpand = document.querySelector('.task-expand #select-project');


    // remove any exisiting
    const length = modalSelectProject.length;
    for(let i = length-1; i>=0; i--) {
        modalSelectProject[i] = null;
    }

    // itemArray.forEach(option => modalSelectProject.add(new Option(option.text, option.value, option.selected)));
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
    let tempArray = [];
    projectsArray.forEach( projectsArrayObj => {
        if(!tempArray.includes(projectsArrayObj['project'])){
            modalSelectProject.add(new Option(projectsArrayObj.project, projectsArrayObj.project))
            tempArray.push(projectsArrayObj.project)
        }
    });
    console.log(projectsArray)
}

// function removeOptions(selectElement) {
    
// }


const selectorButtonTaskExpand = (e) => {
    // for new taskExpandEdit module which already created the selector.
    const taskExpand = document.querySelector('#select-project2').options;
    // for task expand field
    // const taskExpand = document.querySelector('.task-expand #select-project');


    // remove any exisiting
    const length = taskExpand.length;
    for(let i = length-1; i>=0; i--) {
        taskExpand[i] = null;
    }


    // getting default Project Name option selected
    let taskParentNode = e.target.closest('.task');
    let taskID = taskParentNode.dataset.identity;
    console.log("selectorButtonTaskExpand taskID: " + taskID);

    let projectNameArray = taskIndexSearch(taskID);
    let outter = projectNameArray[0];
    let inner = projectNameArray[1];
    console.log("selectorButtonTaskExpand outter: " + outter);
    console.log("selectorButtonTaskExpand inner: " + inner);

    let taskObject = projectsArray[outter].tasks[inner];
    console.log(taskObject);
    let taskProject = projectsArray[outter].tasks[inner].project;


    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement/Option
    // itemArray.forEach(option => modalSelectProject.add(new Option(option.text, option.value, option.selected)));
    let tempArray = [];
    projectsArray.forEach( projectsArrayObj => {
        if(!tempArray.includes(projectsArrayObj['project'])){ //avoid duplicates
            if( projectsArrayObj.project == taskProject ){
                taskExpand.add(new Option(projectsArrayObj.project, projectsArrayObj.project, true, true))
            } else {
                taskExpand.add(new Option(projectsArrayObj.project, projectsArrayObj.project, false))
            }
            tempArray.push(projectsArrayObj.project)
        }
    });
    console.log(projectsArray)
}



export { selectorButton, selectorButtonTaskExpand }


// not bad https://alvarotrigo.com/blog/javascript-select-option/