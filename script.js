document.body.onload = addDiv;
const container = document.getElementById('container');
const btnNew = document.getElementById('btnNew');

//Random Square Color
let randomColor = function(){
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let gridColor = `rgb(${red},${green},${blue})`;
    return gridColor;
}

//Random Body Color
function randomBody(){
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let rngColor = `rgb(${red},${green},${blue})`;
    document.body.style.background = rngColor;
}

randomBody();
//Default grid when starting app
let gridSize = 16;

function addDiv(){
    for(i = 0; i< gridSize; i++){
        let row = document.createElement("div");
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('grid');
            square.style.width = `${256 / gridSize}px`;
            square.style.height = `${256 / gridSize}px`;
            row.appendChild(square);  

            //Randomizes color in each square
            square.addEventListener("mouseover",function(e){
            square.style.backgroundColor = randomColor();
            })
        }
    }
}



btnNew.addEventListener('click', function(e){
    gridSize = prompt('Enter a value between 1 and 100');
    container.innerHTML = "";
    if(0 < gridSize && gridSize <=100){
        addDiv();
    }else{
        gridSize = 16;
        randomBody();
        addDiv();
        alert('ENTER A VALUE BETWEEN 1 & 100!');
    }
})
