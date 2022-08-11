const month = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const days = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
month.innerText = months[monthInx];
fullDate.innerText = new Date().toDateString();

let addDays = "";


for (let i = firstDay; i > 0; i--) {
    addDays += `<div class="empty"></div>`;
}

for (let i = lastDay; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        addDays += `<div class="today">${i}</div>`;
    } else {
        addDays += `<div>${i}</div>`
    }
}

days.innerHTML = addDays;