const container = document.querySelector("div.container");

const square = document.createElement("div");

square.style.width = "20px";
square.style.length = "20px";
square.textContent = "1";
square.setAttribute("class", "grid");

let gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "gridContainer");

for(let i = 0; i < 16; i++){
    let gridContainerClone = gridContainer.cloneNode(true);
    container.appendChild(gridContainerClone);
    for(let i = 0; i < 16; i++){
        let squareClone = square.cloneNode(true);
        gridContainerClone.appendChild(squareClone);
    }
}


