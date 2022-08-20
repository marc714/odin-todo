// on submit, creates object, pushes to array, then pushes array to local storage.
import { projectsArray } from './taskArray';
import { projectDisplay } from './projectDisplay';
import { clearBody } from '../utils/clearBody';
import { taskBtn, closeTaskBtn } from '../components/ui/newTaskButton';
import { updateLocalStorage } from '../utils/localStorageUpdate';
import { getProjectList } from '../modules/projectList';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

let submitBtn = document.querySelector('#form-submit-button');

// to do items go into Project containers i.e. Arrays
class TaskItem {
    constructor(project, title, description, date, priority, completed, notes, identity) {
        this.project = project,
        this.title = title,
        this.description = description,
        this.date = date,
        this.priority = priority,
        this.completed = completed;
        this.notes = notes,
        this.identity = uuidv4();
    }
}

// on submit, takes form values, pushes to array and updates localstorage
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const projectName = document.querySelector('#select-project').value;
    const title = document.querySelector('#form-title').value;
    const description = document.querySelector('#form-description').value;
    const date = document.querySelector('#form-date').value;
    const priority = document.querySelector('#form-priority').value;
    const completed = document.querySelector('#form-checkbox').checked;
    const notes = "";
    const identity = uuidv4();

    let newTask = new TaskItem (projectName, title, description, date, priority, completed, notes, identity)
    
    // since we made Project Name an existing requirement via Selection Input, we must search the Task Array for it.
    projectsArray.forEach(projectObj => {
        if(projectObj['project'] === projectName){
            projectObj['tasks'].push(newTask);
        }
    });

    closeTaskBtn();

    clearBody(); // clears main body
    projectDisplay(projectName); // displays tasks
    
    updateLocalStorage(); // updates local storage

});

export { submitBtn, TaskItem }