const container = document.querySelector("div.container");

const square = document.createElement("div");

square.style.width = "20px";
square.style.length = "20px";
square.setAttribute("class", "grid");

let gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "gridContainer");

for(let i = 0; i < 16; i++){
    let gridContainerClone = gridContainer.cloneNode(true);
    container.appendChild(gridContainerClone);
    
    for(let j = 0; j < 16; j++){
        let squareClone = square.cloneNode(true);
        squareClone.textContent = i*16 + j;
        gridContainerClone.appendChild(squareClone);
        squareClone.addEventListener("mouseenter", (e) =>{
            //console.log(e.target);
            //gridContainer.classList.add("hover");
            e.target.style.backgroundColor = "red";
        });
    }
}


