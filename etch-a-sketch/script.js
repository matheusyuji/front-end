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

function getSize() {
  let size = prompt("Enter the number of squares per side (maximum 100).");
  size = parseInt(size);
  if(isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return getSize();
  }
  return size;
}

function resize() {
  let size = getSize();
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  createGrid(size);
}

createGrid(20);