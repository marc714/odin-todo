// find the task by unique id off click from projectDisplay to put into taskExpandEdit fields.
// returns the array index value
// update, we will have a delete button dynamically added to the task and not on click.

import { projectsArray } from "./taskArray";

/*
projectsArray = [
    {project: name, tasks: [{}, {}]}
    {project: name, tasks: [{}, {}]}
];
*/

function taskIndexSearch(taskID){
    //taskID = "06b88b47-31ba-4dc1-ac23-efc736d6f38b"
    console.log("The data ID is: " + taskID);
    // should return   [0][1]  etc.. so that you can go projectsArray.splice(variable, 1)
    // on click of the edit button, the e gets passed to taskIndexSearch

    let outter = "";
    let inner = "";
    
    outter = projectsArray.findIndex(projectsArrayObj => {
        return projectsArrayObj.tasks.some(taskObj =>{
            //console.log(taskObj.description)
            //console.log(taskObj.identity + taskID);
            return taskObj.identity == taskID
        })
    });

    projectsArray.forEach(projectsArrayObj => {
        let subArray = projectsArrayObj.tasks;
        subArray.forEach(tasksObj => {
            if(tasksObj.identity == taskID){
                inner = subArray.findIndex(tasksObj => tasksObj.identity == taskID)
            }
        })
    });

    console.log("outter: " + outter)
    console.log("inner: " + inner)

    return [outter, inner] //returning as an array 

    // delete function will take take below index and insert into projectsArray.slice(taskIndexSearch(taskID), 1) So just export index only, with no array "projectsArray"
    // return outter.tasks.
    // i think we need to get to projectsArray[outer].tasks.splice(inner, 1)
}


export { taskIndexSearch }