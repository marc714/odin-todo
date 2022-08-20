// module for modal popup

// import all project names for form select input
import { selectorButton } from "./modalProjectSelector";
// import submit button w/ eventListener attached. 
import { submitBtn } from "../../modules/taskSubmit";



const modal = document.getElementById("myModal");
const taskButton = document.querySelector('.new-task');
taskButton.style.color = "blue"
const span = document.getElementsByClassName("close")[0];


// when user clicks on button, open modal
function taskBtn(){
    selectorButton();

    taskButton.addEventListener('click', ()=> {   
        modal.style.display = "block";
    });

    span.onclick = function (){
        modal.style.display = "none"
    }
};

function closeTaskBtn(){
    modal.style.display = "none";
}


export {taskBtn, closeTaskBtn}