const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerConatainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", (() => {
    trailerConatainerEl.classList.remove("active");
}))

closeIconEl.addEventListener("click", (() => {
    trailerConatainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
}))