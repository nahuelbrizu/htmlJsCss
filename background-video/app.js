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
const imgContainer = document.querySelector(".image-container");
const img = imgContainer.querySelectorAll("img");



const containerText = document.querySelector(".container-text");
const careers = ["Nahuelito", "soccer player", "good friend", "Web Developer", "Freelancer"];
let  careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
   characterIndex++;
   containerText.innerHTML = `
   <h1>
   I am ${careers[careerIndex].slice(0, careers.length) === "I" ? "an" : "a"}
   ${careers[careerIndex].slice(0, characterIndex)}
   </h1>
   `;
   if (characterIndex === careers[careerIndex].length){
       careerIndex++;
       characterIndex = 0;
   }
   if (careerIndex === careers.length){
       careerIndex = 0;
   }
   setTimeout(updateText, 400);
}


let currentImg = 0;
let interval;
let scrollDirection = true;


next.addEventListener("click", () => {
    console.log(currentImg);
    clearInterval(interval);
    if (currentImg >= img.length - 1){
       scrollDirection = false;
    } else {
        updateImg(true);
        scrollDirection = true;
    }
    interval = setInterval(() => {
        updateImg(scrollDirection);
    }, 3000);
});

prev.addEventListener("click", () => {
    console.log(currentImg);
    console.log(interval);
    clearInterval(interval);
    if (currentImg <= img.length -1){
        updateImg(false);
    } else {
        scrollDirection = false;
    }
    interval = setInterval(() => {
        updateImg(scrollDirection);
    }, 3000);
    console.log(currentImg);

});
interval = setInterval(() => {
    updateImg(scrollDirection);
}, 2000);

function updateImg(goingRight) {
    if (goingRight) {
        currentImg++;
    }
    if (!goingRight) {
        currentImg--;
    }
    if (currentImg >= img.length - 1 && goingRight) {
        scrollDirection = false;
    } else if (currentImg <= 0 && !goingRight) {
        scrollDirection = true;
    }
    imgContainer.style.transform = ` translateX(-${(currentImg) * 500}px)`;
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
        bottomContainer - navbar.offsetHeight - 50
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



const tabs = document.querySelector(".tabs");
const articles = document.querySelectorAll(".content");
const buttons = document.querySelectorAll(".button");

tabs.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove live
        buttons.forEach(function (btn){
            btn.classList.remove("live");
        });
        //Add live
        e.target.classList.add("live");
        //hide other articles
        articles.forEach(function (article) {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});

const imgContainer2 = document.querySelector(".image-container2");

const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");
let x = 0;
let timer;

prev2.addEventListener("click", () => {
    x = x + 45;
    clearInterval(timer);
    updateGallery();
});

next2.addEventListener("click",  () => {
    x = x - 45;
    clearInterval(timer);
    updateGallery();
});


function updateGallery(){
    imgContainer2.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 3000)
}

updateGallery();


const root = document.documentElement;
const chooseTheme = (color) => {
    root.style.setProperty("--golden-glow", color)
}




const container = document.querySelector(".string-img-container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - cards.offsetLeft;
    container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
    isPressedDown = false;
});
container.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    cards.style.left =`${e.offsetX - cursorXSpace}px`;
    boundCards();
});
/* que mierda es esto?   =) */
function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
    } else  if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}














