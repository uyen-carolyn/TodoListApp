const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add tasks to list
function addTask(){
    if(inputBox.value === ''){
        alert("Please write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// mark task as completed or deleted
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// save list status even after refreshing and closing browser using local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks(); 