function warningMessage(projectTitle){
    const warning = document.querySelector('.warning-text');
    let myText = `Are you sure you want to delete: ${projectTitle}`;
    warning.append(myText);
}

export { warningMessage }