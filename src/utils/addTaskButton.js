

function addNewTaskButton(){
    const mainBody = document.querySelector('.main-body')
    const newTaskButton = document.createElement('button');
    newTaskButton.classList.add('new-task');

    mainBody.prepend(newTaskButton);
}

export { addNewTaskButton }
