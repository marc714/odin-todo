// import taskSubmitButton

function newTaskForm(){
    console.log("hello newTaskForm");
    let myForm = document.createElement('FORM');
    let project = document.createElement('input')
    project.setAttribute("type", "text")
    project.setAttribute("name", "project");
    project.setAttribute("placeholder", "Gym")

    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");

    myForm.append(project)
    
    let mainBody = document.querySelector('.main-body')
    mainBody.append(myForm);

}

// export {newTaskForm}

/// https://stackoverflow.com/questions/3991204/how-to-create-a-form-dynamically-using-javascript