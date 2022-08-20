// clears project title header, and, tasks. leaves task button alone.

function clearBody(){
    let projectHeader = document.querySelector('.project-title');
    let tasks = document.querySelectorAll('.task');
    
    projectHeader.remove();
    tasks.forEach(tasks => {
        tasks.remove();
    })
}

export { clearBody };