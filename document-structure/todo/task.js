let taskInput = document.getElementById("task__input");
let btn = document.getElementById("tasks__add");
let tasksList = document.getElementById("tasks__list");

function createTask() {
    tasksList.insertAdjacentHTML('afterBegin', `
    <div class="task">
        <div class="task__title"> ${taskInput.value.trim()} </div>
        <a href="#" class="task__remove">&times;
    </a></div>`);

    taskInput.value = "";
    
    let removeElement = tasksList.querySelector(".task").querySelector(".task__remove");

    removeElement.onclick = () => {
    	removeElement.parentElement.remove();
    	return false
    }    
}

btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (taskInput.value.trim().length !== 0) {
        createTask();
    }
});