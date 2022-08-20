// removes the delete project button
function removeProjectDeleteBtn () {
    const projectRemoveBtn = document.querySelector('.project-remove-button');
    projectRemoveBtn.remove();
}

export { removeProjectDeleteBtn }