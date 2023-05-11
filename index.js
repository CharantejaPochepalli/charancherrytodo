

var taskInput = document.querySelector(".input20");
var buttonAdd = document.querySelector(".tsk");

taskInput.addEventListener("input", function () {
    if (taskInput.value === "") {
        buttonAdd.disabled = true;
    }
    else {
        buttonAdd.disabled = false;
    }
});
function clearInput() {
    if (taskInput.value != "") {
        taskInput.value = "";
    }

}
/*var addTask = document.querySelector(".input20");
var buttonAdd = document.querySelector(".tsk");*/
/*buttonAdd.addEventListener("click",function(){

})*/
var list = document.getElementById("tasks");


//console.log(listt);

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault(); 
    if (taskInput.value === "") {
        alert("Please Enter Text");
        return false;
    }

    else{
        const li = document.createElement('li');
        console.log(li);
        li.innerHTML = `
    ${taskInput.value}
    <button id="edit" class="btn btn-light">Edit</button>
    <button id="delete" class="btn btn-light">Delete</button>
  `;
        list.appendChild(li);
        taskInput.value = "";
    }
    
});

list.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.id === "delete") {
        event.target.parentElement.remove();
    } else if (event.target.id === "edit") {
        const task = event.target.parentElement.firstChild.textContent;
        taskInput.value = task;
        event.target.parentElement.remove();
    }
});


