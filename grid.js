function buildGrid(gridSize, parent) {
  const cellWidth = Math.floor(screen.width / gridSize);
  const cellHeight = Math.floor(screen.height / gridSize);
  const cellSize = cellWidth > cellHeight ? cellHeight : cellWidth;

  const newGrid = document.createElement("div");
  newGrid.id = "grid";
  newGrid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.style.width = cellSize + "px";
    newDiv.style.height = cellSize + "px";
    newDiv.id = `cell${i}`;
    newGrid.appendChild(newDiv);
  }

  const oldGrid = document.querySelector("#grid");
  if (oldGrid) parent.removeChild(oldGrid);

  parent.appendChild(newGrid);
}

const gridSize = 10;
const content = document.querySelector("#content");
buildGrid(gridSize, content);

window.addEventListener("resize", (event) => buildGrid(gridSize, content));
