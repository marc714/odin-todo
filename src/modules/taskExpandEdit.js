// module to expand and edit task
import { selectorButtonTaskExpand } from "../components/ui/modalProjectSelector";
import { updateLocalStorage } from "../utils/localStorageUpdate";
import { projectsArray } from "./taskArray";
import { taskIndexSearch } from "./taskIndexSearch";
import { clearUI } from "../utils/clearUI";
import { getProjectList } from "./projectList";
import { projectDisplay } from "./projectDisplay";
import { TaskItem } from "./taskSubmit";

/*
projectsArray = [
    {project: name, tasks: [{}, {}]}
    {project: name, tasks: [{}, {}]}
];
*/

function expandTask(e){
    let taskParentNode = e.target.closest('.task');
    let taskID = taskParentNode.dataset.identity;
    console.log("expandTask taskID: " + taskID);
    
    // targeting the task by index
    let deleteArray = taskIndexSearch(taskID);
    let outter = deleteArray[0];
    let inner = deleteArray[1];
    console.log("expandTask outter: " + outter);
    console.log("expandTask inner: " + inner);

    let taskObject = projectsArray[outter].tasks[inner];
    console.log(taskObject);
    let taskProjectEdit = taskObject.project; // use this only to when editing tasks. initial value comes from module, not this.
    let taskTitle = projectsArray[outter].tasks[inner].title;
    let taskDescription = projectsArray[outter].tasks[inner].description;
    let taskDate = projectsArray[outter].tasks[inner].date;
    let taskPriority = projectsArray[outter].tasks[inner].priority;
    let taskCompleted = projectsArray[outter].tasks[inner].completed;
    let taskNotes = projectsArray[outter].tasks[inner].notes;


    // e.currentTarget.style.opacity = "0.2";
    const expandSectionContainer = document.createElement('div');
    expandSectionContainer.classList.add('task-expand');
    
    let myForm = document.createElement('FORM');
        const project = document.createElement('select');
        // we have to append the <select> here now, and not at the end.
        myForm.append(project);
        expandSectionContainer.append(myForm);

        project.setAttribute('id', 'select-project2');
        
        // make a note, why doesn't this work below. Had to invoke SelectorButtonTaskExpand in the ProjectDisplay module after expand(e)
        // maybe the call stack had to completely finish w/ expand() before being able to select the <select> 

        //selectorButtonTaskExpand();
        // const temp = document.querySelector('#select-project2');
        // let newOption = new Option('Option Text','Option Value');
        // temp.add(newOption,undefined);

        // remove any exisiting
        // const length = temp.length;
        // for(let i = length-1; i>=0; i--) {
        //     temp[i] = null;
        // }

        // let tempArray = [];
        // projectsArray.forEach( projectsArrayObj => {
        //     if(!tempArray.includes(projectsArrayObj['project'])){
        //         temp.add( new Option(projectsArrayObj['project']) )
        //         // tempArray.push(projectsArrayObj['project'])
        //         // console.log("current tempArray" + tempArray);
        //     }
        // });

        // section to find and pull values from the event.target into the form fields below
        // taskIndexSearch.js to find the index


        
    
        const title = document.createElement('input');
        title.setAttribute("type", "text");
        title.setAttribute("name", "title");
        title.setAttribute("value", taskTitle);

        const description = document.createElement('input');
        description.setAttribute("type", "text");
        description.setAttribute("name", "description");
        description.setAttribute("value", taskDescription);

        const myDate = document.createElement('input');
        myDate.setAttribute("type", "date");
        myDate.setAttribute("name", "date");
        myDate.setAttribute("value", taskDate);

        const priority = document.createElement('input');
        priority.setAttribute("type", "text");
        priority.setAttribute("name", "priority");
        priority.setAttribute("value", taskPriority);
    
        const completed = document.createElement('input');
        completed.setAttribute("type", "checkbox");
        completed.setAttribute("name", "completion");
        console.log(taskCompleted);
        if(taskCompleted == false || taskCompleted == "no"){
            console.log("task completed == false");
            completed.checked = false;
        } else {
            completed.checked = true;
        }
        // https://stackoverflow.com/questions/57617532/why-element-setattributechecked-true-doesnt-work
        //completed.setAttribute("checked", );

        const notes = document.createElement('textarea');
        notes.setAttribute("type", "text");
        notes.setAttribute("name", "notes")
        notes.value = taskNotes;


        const submit = document.createElement("input");
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");
        submit.addEventListener("click", (e)=>{
            e.preventDefault();
            let newProject = document.querySelector('#select-project2');
            //"project" = newProject.value; work on this later. see below.
            //console.log(title.value);

            // your just reassigning variables. use the above taskObject
            if(taskObject.project == project.value){
                projectsArray[outter].tasks[inner].title = title.value;
                taskObject.description = description.value;
                taskObject.date = myDate.value;
                taskObject.priority = priority.value;
                taskObject.completed = completed.checked;
                taskObject.notes = notes.value;
            } else {
                // essentially making a new Task since we are moving to a different project name:
                const newProjectName = project.value;
                const newTitle = title.value;
                const newDescription = description.value;
                const newDate = myDate.value;
                const newPriority = priority.value;
                const newCompleted = completed.checked;
                const newNotes = notes.value;
                const newIdentity = taskObject.identity;

                let newTask = new TaskItem (newProjectName, newTitle, newDescription, newDate, newPriority, newCompleted, newNotes, newIdentity)
                // find existing Project name, and push new Task into it.
                projectsArray.forEach(projectObj => {
                    if(projectObj['project'] === newProjectName){
                        projectObj['tasks'].push(newTask);
                    }
                });

                // deleting the old Task
                projectsArray[outter].tasks.splice(inner, 1);
            }   
            updateLocalStorage();
            clearUI();
            getProjectList();
            projectDisplay("all");
            
        });
    
    // myForm.append(project);
    myForm.append(title);
    myForm.append(description);
    myForm.append(myDate);
    myForm.append(priority);
    myForm.append(completed);
    myForm.append(notes);
    myForm.append(submit);
    

    // expandSection.append(myForm);
    
    // e.currentTarget.append(expandSection);

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
            // e.currentTarget identifies the element on which the event handler was attached.
            // e.target identifies the element on which the event occured.   
    
            ///////// below is for clicking on the entire Task row
            // let parentDiv = document.querySelector('.main-body');
            // let currentTask = e.currentTarget;
                // instead of append, use insertBefore:
            // parentDiv.insertBefore(expandSectionContainer, currentTask.nextSibling);
    
    // currentTask.removeEventListener('click', (e)=>{
    //     expandTask(e);
    // });
    
    /////////// below is for clicking on the edit button
        // can't use parentElement. Uses closest, dom will travel up the chain until it hits target.
    let parentDiv = e.currentTarget.closest('.task');
    parentDiv.append(expandSectionContainer);    


    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", ()=>{
        let expanded = document.querySelector('.task-expand');
        expanded.remove();
    })
    expandSectionContainer.append(cancelBtn)    
}

export { expandTask }