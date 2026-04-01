let container =  document.querySelector(".container");
let containerHeight = container.style.maxHeight = "1600px"; 
let containerWidth = container.style.maxWidth = "1600px";

let body = document.querySelector("body");
let square; 

for (let i = 1; i <= 256; i++) {
    square = document.createElement("div");
    square.className = "cell";
    container.appendChild(square);
}


let cells = document.querySelectorAll(".cell");


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

const buttons = document.querySelector("button");

const getRidOfGrid = function () {
    body.removeChild(container);
}

const makeNewGrid = function () {
    getRidOfGrid;
    
    container = document.createElement("div");
    container.className = "container";
    container.style.maxHeight = "1600px"; 
    container.style.maxWidth = "1600px";
    document.body.appendChild(container);

    let userInput = prompt("Input a number less than 100");

    while (userInput >= 100) {
        userInput = prompt("Input a number less than 100");
    }

    let numberOfSquares = userInput * userInput

    for (let i = 1; i <= numberOfSquares; i++) {
    square = document.createElement("div");
    square.className = "cell";

    let squareHeight = parseInt(containerHeight) / userInput; 
    square.style.height = `${squareHeight}px`;


    let squareWidth = parseInt(containerWidth) / userInput; 
    square.style.width = `${squareWidth}px`;

    container.appendChild(square);
    }

    cells = document.querySelectorAll(".cell");
    cells.forEach((cells) => {
    cells.addEventListener("mouseenter", cursorHover);
    cells.addEventListener("mouseleave", cursorExit);
    })
        
}

buttons.addEventListener("click", makeNewGrid);

