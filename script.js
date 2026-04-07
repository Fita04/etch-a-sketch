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

cells.forEach((cells) => {
    cells.addEventListener("mouseenter", cursorHover);
})

const buttons = document.querySelector("button");


const makeNewGrid = function () {
    let userInput = parseInt(prompt("Input a number less than 100"));


    if (userInput >= 100 || userInput == "" || userInput == null || !Number.isInteger(userInput)) {   
        return; 
    }   else if (userInput <= 100) { 
    body.removeChild(container);
    
    container = document.createElement("div");
    container.className = "container";
    container.style.maxHeight = "1600px"; 
    container.style.maxWidth = "1600px";
    document.body.appendChild(container);

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
    }

    cells = document.querySelectorAll(".cell");
    cells.forEach((cells) => {
    cells.addEventListener("mouseenter", cursorHover);
    })
   }


buttons.addEventListener("click", makeNewGrid);
