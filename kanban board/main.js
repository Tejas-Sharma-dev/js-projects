const dropables = document.querySelectorAll(".panel-card-container");
const addTaskBtn = document.getElementById("add-task-btn");
const userTextInputEle = document.getElementById("user-input");
const todoDropEle = document.getElementById("todo-drop-target");
const inprogressDropEle = document.getElementById("inprogress-drop-target");
const doneDropEle = document.getElementById("done-drop-target");
const todoSpanEle = document.getElementById("todo-count-span");
const inprogressSpanEle = document.getElementById("inprogress-count-span");
const doneSpanEle = document.getElementById("done-count-span");

// vital for storing Task
let taskNode = null;

/*
    determines the current state, by the stateId (conatainer's ID)
*/
function getCurrentState(stateId) {
    let currentState = "";

    switch (stateId) {
        case "todo-drop-target":
            currentState = "task-todo";
            break;
        case "inprogress-drop-target":
            currentState = "task-inprogress";
            break;
        case "done-drop-target":
            currentState = "task-done";
            break;
        default:
            console.log("state not found");
    }

    return currentState;
}

dropables.forEach((dropable) => {
    /*
        dragover state:
        - says browser this item is draggable and can be dropped here
    */
    dropable.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    /*
        drop state:
        - Appends Task to container and updates the Task State
    */

    dropable.addEventListener("drop", (event) => {

        // selected tasknode is appended to the respective container
        dropable.appendChild(taskNode);

        const droppedTarget = dropable.id;
        const droppedState = getCurrentState(droppedTarget);

        // remove the previous state
        taskNode.classList.remove("task-todo", "task-inprogress", "task-done");

        // updating with current state
        taskNode.classList.add(droppedState);

        // updates the task count on each drop
        updateTaskCount();
    });
});

/*
    keydown on userText (input):
    - simplifies UX, user are not require to click on 'Add Task' button for every 
    task added.

*/
userTextInputEle.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form behavior
        addTaskBtn.click();
    }
});


/*
    createTaskCard
    - creates a new element (div)
    - assigns the respective classes
    - adds the necessary event listeners
    - return the whole element node

*/
function createTaskCard(task) {
    let taskCard = document.createElement("div");

    // adding class and setting nodes property as draggable
    taskCard.classList.add("task-card", "task-todo");
    taskCard.innerHTML = `<span>${task}</span>`;
    taskCard.draggable = true;

    // each created task card is appended with an event listener
    taskCard.addEventListener("dragstart", () => {
        taskCard.classList.add("dragging");
        // assigning the taskNode to the current dragged element
        taskNode = taskCard;
    });

    taskCard.addEventListener("dragend", () => {
        taskCard.classList.remove("dragging");
    });

    return taskCard;
}

/*
    click on 'Add Task' button:
    - handles zero length string input
    - resets the user text after submission
    - appends the newly created task card in the 'To-Do' container (Default behaviour)
    - updates the count of all the container

*/
addTaskBtn.addEventListener("click", () => {
    // fetch the task info
    const task = userTextInputEle.value;

    if (task.length === 0) {
        alert("Task cannot be empty!");
        return;
    }

    // resets the text after submission
    userTextInputEle.value = "";

    let taskCard = createTaskCard(task);

    todoDropEle.appendChild(taskCard);

    // updates the task count on each addition
    updateTaskCount();
});

/*
    updateTaskCount()
    - fetches the updated length of each container and updates the count span accordingly
*/
function updateTaskCount() {
    //fetch updated data
    let todoTaskLength = todoDropEle.children.length;
    let inprogressTaskLength = inprogressDropEle.children.length;
    let doneTaskLength = doneDropEle.children.length;

    // console.log(todoTaskLength);

    // update all the respective span tag
    todoSpanEle.textContent = todoTaskLength;
    inprogressSpanEle.textContent = inprogressTaskLength;
    doneSpanEle.textContent = doneTaskLength;
}
