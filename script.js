const container =  document.querySelector(".container");
let square; 

for (let i = 1; i <= 256; i++) {
    square = document.createElement("div");
    square.className = "cell";
    square.id = i;
    container.appendChild(square);
}

const cells = document.querySelectorAll(".cell");

const cursorHover = (event) => {
    event.target.classList.add("hover");
}


const cursorExit = (event) => {
    event.target.classList.remove("hover");        
}

cells.forEach((cells) => {
    cells.addEventListener("mouseenter", cursorHover);
    cells.addEventListener("mouseleave", cursorExit);
})
