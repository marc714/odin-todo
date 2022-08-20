// checks for duplicate project names.
import { projectsArray } from "./taskArray";

function projectNameTest(projectInputValue){
    // const projectInputValue = document.querySelector('.new-project-input').value;
    //projectInputValue.toLowerCase();

    projectsArray.forEach( projectObj => {
        //projectName.toLowerCase();
        
        if(projectObj['project'] == projectInputValue){
            console.log(`Duplicate! Existing: ${projectObj['project']} vs Yours: ${projectInputValue}`)
            return "bad";
        } 
        // else if(projectObj['project'] != projectInputValue) {
        //     console.log(`Testing. No duplicates. Existing: ${projectObj['project']} vs Yours: ${projectInputValue}`)
        //     return "good";
        // }
    });
}


export { projectNameTest }
