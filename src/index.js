import './less/index.less'

// Your code goes here!

const title = document.querySelector("h1");
const homeButton = document.querySelector("#homeButton");
const aboutUsButton = document.querySelector("#aboutUsButton");
const blogButton = document.querySelector("#blogButton");
const contactButton = document.querySelector("#contactButton");

title.addEventListener("mouseover", () => {
    title.style.backgroundColor = 'yellow';
})

homeButton.addEventListener("click", () => {
    homeButton.style.backgroundColor = 'green';
})

aboutUsButton.addEventListener("dblclick", () => {
    aboutUsButton.style.backgroundColor = 'red';
})

window.addEventListener("keydown", (event) => {
    if (event.key === "0") {
        console.log("You pressed the zero key.");
    }
})