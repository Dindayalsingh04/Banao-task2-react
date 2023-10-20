// script.js

const left = document.getElementById("left");
const right = document.getElementById("right");

left.addEventListener("scroll", () => {
    right.style.overflowY = "hidden";
});

left.addEventListener("mouseleave", () => {
    right.style.overflowY = "scroll";
});
