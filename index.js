let gridSize = 16;
const container = document.querySelector("div.container");

const square = document.createElement("div");

square.style.width = "20px";
square.style.length = "20px";
square.setAttribute("class", "grid");

let gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "gridContainer");

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        let gridContainerClone = gridContainer.cloneNode(true);
        container.appendChild(gridContainerClone);
        
        for(let j = 0; j < gridSize; j++){
            let squareClone = square.cloneNode(true);
            gridContainerClone.appendChild(squareClone);
    
            squareClone.addEventListener("mouseenter", (e) =>{
                e.target.style.backgroundColor = "blue";
            });
        }
    }
}

createGrid();

const button = document.querySelector("#askSize");

button.addEventListener("click", () =>{
    do {
        gridSize = prompt("Enter new grid size");
    } while (gridSize < 1 || gridSize > 100)
    container.textContent = "";
    createGrid();
})

