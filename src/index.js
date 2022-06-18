
document.addEventListener("DOMContentLoaded", () => {
    // add an event listener for submit action on the form
    document.querySelector("#create-task-form").addEventListener("submit", (e) => {
        // prevent the default action of the form
        e.preventDefault();
        // get the value of the input
        const task = document.querySelector("#new-task-description").value;
        // add the task to the list
        addTask(task);
        // clear the input
        document.querySelector("#new-task-description").value = "";
    });

    // add a method to add a task to the list
    function addTask(task) {
        // create a new list item
        const listItem = document.createElement("li");
        // add the task to the list item
        listItem.innerHTML = task;
        // add delete button to the list item
        listItem.innerHTML += `<button class="delete-button">Delete</button>`;
        // add the list item to the list
        document.querySelector("#list").appendChild(listItem);
    }

    // add an event listener for delete action on the list
    document.querySelector("#list").addEventListener("click", (e) => {
        // if the target is a delete button
        if (e.target.classList.contains("delete-button")) {
            // remove the list item
            e.target.parentElement.remove();
        }
    });
});
