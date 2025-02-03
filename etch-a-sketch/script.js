function mouseOver (event) {
  event.target.style.backgroundColor = "black";
}
  
function createGrid(size) {
  const grid = document.querySelector(".grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for(let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", mouseOver);
    grid.appendChild(square);
  }
}

createGrid(20);
