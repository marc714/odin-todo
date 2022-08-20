// displays header. e.g. Project: all

function projectHeader(projectTitle){
    const myBody = document.querySelector('.main-body');

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-title');
    projectHeader.dataset.projectName = projectTitle;
    projectHeader.textContent = `Project: ${projectTitle}`;
    
    // dataset for delete project button
    // if(projectTitle == "all"){
    //     projectHeader.dataset.title = "all"; 
    // }

    myBody.append(projectHeader);

}

export { projectHeader }