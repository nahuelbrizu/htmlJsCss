const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listUl = document.querySelector(".list");
const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNum = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const moth = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
    month: "long",
});
dayName.innerText = date.toLocaleString("en", {
    weekday: "long",
});
dayNum.innerText = date.getDate();
year.innerText = date.getFullYear();








//* localStorage guarda en el local Storage*//
let list = JSON.parse(localStorage.getItem("list"));

if (list) {
    list.forEach( (tarea) => {
        toDoList(tarea);
    })
}

form.addEventListener("submit",
    (event) => {
    event.preventDefault();
    toDoList();
    })

function toDoList(tarea) {
    let newTask = input.value;

    if (tarea) {
        newTask = tarea.name;
    }

    const newLi = document.createElement("li");
    if (tarea && tarea.checked) {
        newLi.classList.add("checked")
    }
    newLi.innerText = newTask;
    listUl.appendChild(newLi);
    input.value = "";

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <i class="fa fa-check-circle"/>
    `;
    newLi.appendChild(btnDiv);

    const trashBtn = document.createElement("div");
    trashBtn.innerHTML= `
    <i class="fa fa-trash"/>
    `;
    newLi.appendChild(trashBtn);

    btnDiv.addEventListener("click", () => {
        newLi.classList.toggle("checked");
    saveListWhitLocalStorage();
    });

    trashBtn.addEventListener("click", () => {
        newLi.remove();
        saveListWhitLocalStorage()
    })

    saveListWhitLocalStorage();
}


function saveListWhitLocalStorage(){

    const allLi = document.querySelectorAll("li");
    list = [];
    allLi.forEach((newLi)=> {
        list.push({
            name: newLi.innerText,
            checked: newLi.classList.contains("checked"),
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
}