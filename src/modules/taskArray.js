// nested objects https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/nested-objects
// https://stackoverflow.com/questions/48168601/change-the-value-of-imported-variable-in-es6


let projectsArray = [
    {
        project: "main",
        tasks: [
            {
            project: "main",
            title: "Car Payment",
            description: "$500 car installment payment",
            date: "2021-04-01",
            priority: "high",
            completed: "false",
            notes: "i love big cars and i cannot lie", 
            identity: "08083DSFA"
            },
            {
            project: "main",
            title: "Gas Bills",
            description: "Pay August gas bills for LA Home",
            date: "2022-01-22",
            priority: "medium",
            completed: "true",
            notes: "when i eat too many beans I have a large gas bill",
            identity: "000004000"
            }

        ]
    },
    {
        project: "gym",
        tasks: [
            {
            project: "gym",
            title: "Chest",
            description: "Bench press",
            date: "2022-01-01",
            priority: "high",
            completed: "true",
            notes: "chest days are the best days",
            identity: "3242ASDFS"
            },
            {
            project: "gym",
            title: "Legs",
            description: "Squats",
            date: "2022-02-11",
            priority: "medium",
            completed: "false",
            notes: "ass to grass",
            identity: "0303040403"
            }
        ]
    }
];

function setProjectsArray(fromLocalStorage){
    projectsArray = fromLocalStorage;
}

export { projectsArray, setProjectsArray }