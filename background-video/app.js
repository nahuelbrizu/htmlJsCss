const btn = document.querySelector(".btn-secondary")
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");

const month = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const days = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
////navbar
const navbar = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");
//watch
const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const amPm = document.getElementById("ampm");

///img//
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const img = document.querySelectorAll("img");
const imgContainer = document.querySelector(".image-container");




let currentImg = 0;
let interval;
let scrollDirection = true;

next.addEventListener("click", () => {
    clearInterval(interval);
    updateImg(true);
    scrollDirection = true;
    interval = setInterval(() => {
        updateImg(scrollDirection);
    }, 3000);
});

prev.addEventListener("click", () => {
    clearInterval(interval);
    updateImg(false);
    scrollDirection = false;
    interval = setInterval(() => {
        updateImg(scrollDirection);
    }, 3000);
});
interval = setInterval(() => {
    updateImg(scrollDirection);
}, 3000);


function updateImg(goingRight) {
    if (goingRight) {
        currentImg++;
    } else {
        currentImg--;
    }
    if (currentImg >= img.length && goingRight) {
        scrollDirection = false;
    } else if (currentImg <= 0 && !goingRight) {
        scrollDirection = true;
    }
    imgContainer.style.transform = ` translateX(-${(currentImg -1 ) * 500}px) `;
}


//  clock//
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    amPm.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock()


window.addEventListener("scroll", () => {
    if (
        window.scrollY >
        bottomContainer.offsetTop - navbar.offsetHeight - 50
    ) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});


btn.addEventListener("click", () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        video.play();
        fa.classList.add("fa-pause");
        fa.classList.remove("fa-play");
    } else {
        btn.classList.add("pause");
        video.pause();
        fa.classList.remove("fa-pause");
        fa.classList.add("fa-play")
    }
});

//window.addEventListener("load",
//   () =>  {
//      preloader.style.zIndex = "-999";
// });

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

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        addDays += `<div class='today'>${i}</div>`
    } else {
        addDays += `<div>${i}</div>`

    }
}

days.innerHTML = addDays;



/////tabs-text

// tabs-content
const tabs = document.querySelector(".tabs");
const buttons = document.querySelector(".button");
const articles = document.querySelector(".text-content");

tabs.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id){
        //remove selected from ohter buttons
        buttons.forEach((btn) =>{
            btn.classList.remove("live")
            console.log("removve-live");
        });
        e.target.classList.add("live");
        console.log("e")

        //hide other article
        articles.forEach((article) => {
            article.classList.remove("live")
            console.log("articles")

        });
        const element = document.getElementById(id)
        element.classList.add("live");
        console.log("addelement")

    }
});





























