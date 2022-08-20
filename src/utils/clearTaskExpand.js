// remove any Task Expand field
function clearTaskExpand(){
    let expanded = document.querySelector('.task-expand');
    if(expanded){ 
        expanded.remove(); 
    };
}

export { clearTaskExpand }