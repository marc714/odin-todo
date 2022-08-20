// module displays tasks by project

// imports the single array containing all projects
import { projectsArray } from './taskArray';
import { projectHeader } from './projectHeader';
import { expandTask } from './taskExpandEdit';
import { selectorButtonTaskExpand } from '../components/ui/modalProjectSelector';
import { taskIndexSearch } from './taskIndexSearch';
import { deleteTasks } from './deleteTasks';

function projectDisplay(projectvalue){
    const myBody = document.querySelector('.main-body');

    // header for project title 
    projectHeader(projectvalue);


    if(projectvalue == "all"){
        projectsArray.forEach( projectsArrayObj => {
            
            projectsArrayObj['tasks'].forEach( taskObj => {
                // next refactor: return taskObj and export into GraphicalUI
                const newTaskRow = document.createElement('div')
                newTaskRow.classList.add('task');

                // labels first across the row
                for(let key in taskObj){
                    if(key !== "identity" && key !== "notes"){ //kinda weird conditional. shouldn't work but does.
                        const taskLabel = document.createElement('div');
                        taskLabel.append(key);
                        taskLabel.classList.add(key, 'label')
                        newTaskRow.append(taskLabel);
                    }
                }
                // values only across the row
                for(let key in taskObj){
                    if(key !== "identity" && key !== "notes"){
                        const taskValue = document.createElement('div');
                        taskValue.append(`${taskObj[key]}`)
                        taskValue.classList.add(key, 'item')
                        newTaskRow.append(taskValue);
                    } else if (key === "identity") {
                        newTaskRow.dataset.identity = taskObj[key];
                        //we are using variable key, hence: taskObj[key]
                        // and not taskObj['key'], that would belong to actual names projectArray['project']
                    }
                }

                //edit and delete buttons
                const btnCtnDiv = document.createElement('div');
                const editBtn = document.createElement('button');
                const delBtn = document.createElement('button');
                btnCtnDiv.classList.add('task-button-container')
                editBtn.classList.add('material-icons');
                delBtn.classList.add('material-icons');
                editBtn.textContent = "edit";
                delBtn.textContent = "delete";
                btnCtnDiv.append(editBtn);
                btnCtnDiv.append(delBtn);
                newTaskRow.append(btnCtnDiv);

                myBody.append(newTaskRow);

                https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
                editBtn.addEventListener('click', (e)=>{
                    let doesElementExist = document.querySelector('.task-expand')
                    if(!doesElementExist){
                        //e.stopPropagation();
                        //move below to expandTask and selectorButtonTaskExpand
                                // let taskParentNode = e.target.closest('.task');
                                // let taskID = taskParentNode.dataset.identity;
                                // console.log(taskID);
                                // taskIndexSearch(taskID);

                        expandTask(e);
                        selectorButtonTaskExpand(e); // must be added after to get options
                        //taskIndexSearch(e);
                    } else {
                        console.log("please submit or close out Expand");
                    }
                });
                delBtn.addEventListener('click', (e)=> {
                    // on click, 
                    // get the unique ID from the data attribute
                    // run's deleteFunction(uniqueID)
                    // delete() includes
                        // function for finding outer index and inner index of uniqueID
                        // delete then slices that index
                        // update localstorage (don't include this either)
                        // reruns projectsDisplay, etc. (actually shouldn't include this)
                    let taskParentNode = e.target.closest('.task');
                    let taskID = taskParentNode.dataset.identity;
                    deleteTasks(taskID);
                        
                })
            })            
        })
    } 
    else {
        projectsArray.forEach(projectsArrayObj => {
            if(projectsArrayObj['project'] == projectvalue){
                
                projectsArrayObj['tasks'].forEach(taskObj => {
                        const newTaskRow = document.createElement('div')
                        newTaskRow.classList.add('task');
                        
                        // labels first across the row
                        for(let key in taskObj){
                            if(key !== "identity" && key !== "notes"){
                                const taskLabel = document.createElement('div');
                                taskLabel.append(key);
                                taskLabel.classList.add(key, 'label')
                                newTaskRow.append(taskLabel);
                            }
                        }

                        // values only across the row
                        for(let key in taskObj){
                            if(key !== "identity" && key !== "notes"){
                                const taskSection = document.createElement('div');
                                taskSection.append(`${taskObj[key]}`)
                                taskSection.classList.add(key, 'item')
                                newTaskRow.append(taskSection);
                            } else if (key === "identity") {
                                newTaskRow.dataset.identity = taskObj[key];
                                //we are using variable key, hence: taskObj[key]
                                // and not taskObj['key'], that would belong to actual names projectArray['project']
                            }
                        }
                    
                    //edit and delete buttons
                    const btnCtnDiv = document.createElement('div');
                    const editBtn = document.createElement('button');
                    const delBtn = document.createElement('button');
                    btnCtnDiv.classList.add('task-button-container');
                    editBtn.classList.add('material-icons');
                    delBtn.classList.add('material-icons');
                    editBtn.textContent = "edit";
                    delBtn.textContent = "delete";
                    btnCtnDiv.append(editBtn);
                    btnCtnDiv.append(delBtn);
                    newTaskRow.append(btnCtnDiv);
                    myBody.append(newTaskRow);
                    
                    // newTaskRow.addEventListener('click', (e)=>{
                    //     let doesElementExist = document.querySelector('.task-expand')
                    //     if(!doesElementExist){
                    //         expandTask(e);
                    //         selectorButtonTaskExpand();
                    //     } else {
                    //         console.log("please submit or close out Expand");
                    //     }
                    // });

                    editBtn.addEventListener('click', (e)=>{
                        let doesElementExist = document.querySelector('.task-expand')
                        if(!doesElementExist){
                            //e.stopPropagation();
                            //move below to expandTask and selectorButtonTaskExpand
                                    // let taskParentNode = e.target.closest('.task');
                                    // let taskID = taskParentNode.dataset.identity;
                                    // console.log(taskID);
                                    // taskIndexSearch(taskID);
    
                            expandTask(e);
                            selectorButtonTaskExpand(e); // must be added after to get options
                            //taskIndexSearch(e);
                        } else {
                            console.log("please submit or close out Expand");
                        }
                    });
                    delBtn.addEventListener('click', (e)=> {
                        // on click, 
                        // get the unique ID from the data attribute
                        // run's deleteFunction(uniqueID)
                        // delete() includes
                            // function for finding outer index and inner index of uniqueID
                            // delete then slices that index
                            // update localstorage (don't include this either)
                            // reruns projectsDisplay, etc. (actually shouldn't include this)
                        let taskParentNode = e.target.closest('.task');
                        let taskID = taskParentNode.dataset.identity;
                        deleteTasks(taskID);
                            
                    })
                })                            
            }
        })
    }
}

export { projectDisplay }