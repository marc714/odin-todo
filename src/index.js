import './styles/style.css'
import { taskBtn } from './components/ui/newTaskButton';
import { projectDisplay } from './modules/projectDisplay';
import { selectorButton } from './components/ui/modalProjectSelector';
import { localStorageCheck } from './utils/localStorageCheck';
import { getProjectList } from './modules/projectList';
import { projectNewBtn } from './components/ui/newProjectButton';
import { addDeleteProjectBtn } from './components/ui/addDeleteProjectButton';

/*
-Project is the array of To-Do items
Need a default Project on load (maybe ALL to do items combined)

-Project to-do items are objects

-objects are either classes of ff
items will have fields: title: text, description: text, dueDate: ???, and priority: select or radio

So create a form. On submit - app takes all values and makes a class item.

dom then textcontent stuff from class item into display.


*/
// Hoisting: unlike functions, classes must be declared before they are called

// project container
/// default on load up show Project containing all items, labeled ALL
// so on load, reference all arrays into one. 
//// or Main Array is where all the other arrays go into. So an array of arrays
//// let's not do a collection of all items.. or can we.

/// on New Project click, create array

/*
On startup - home shows all items from all projects
Default project is Main
-- module - load Main project? 



Project Lists on left sidebar. New project button above.
--on click, new project gets added, and main screen automatically switches to that project


Items/Project 
-- when creating items, Project will be Select list (with Main if no extra projects made)
--If your on a new Project list, when creating items, code to make that current project the default Select
--Project is not an array, but a Key/Value pair? This way you can move/filter/displayAll
-----So individual projects have filtered to display only that key/value pair. So you'll neeed a for in loop


UI
checkbox(completed), Title, <----->  project, priority, Date, edit/delete(expand modal)
---on expnd, include description 

Have empty line ready to go for Event Listener. Or Add task button

*/


// load all projects on startup
const onLoad = (() => {
    localStorageCheck();
    projectDisplay("all");
    taskBtn();
    getProjectList();
    projectNewBtn();
    //addDeleteProjectBtn("all");
})()

// const projectModal = document.querySelector('#project-modal');

// document.addEventListener("click", function(e){
//     if(e.target.matches(".confirm-delete-project")){
//         projectModal.hidden = true;
//     }
// });
// window.onclick = function(event) {
//     if (event.target == projectModal) {
//       projectModal.hidden = true;
//     }
//   }