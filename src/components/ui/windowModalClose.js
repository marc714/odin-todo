document.addEventListener("click", function(e){
    if(e.target.matches(".cancel-delete-project") || !e.target.closest("#project-modal")){
        const projectModal = document.querySelector('#project-modal');
        projectModal.hidden = true;
    }
});