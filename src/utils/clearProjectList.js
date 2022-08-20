// clear project list in order to remove duplicates

function clearProjects(){
    const sidebarProjectNames = document.querySelectorAll('.project-list div');
    sidebarProjectNames.forEach(div => {
    div.remove();
    })
}

export { clearProjects }