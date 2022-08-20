// remove task button in order for select button with new fields to be invoked in call stack

function removeTaskBtn (){
    let taskBtn = document.querySelector('.new-task');  
    taskBtn.remove();
}

export { removeTaskBtn }