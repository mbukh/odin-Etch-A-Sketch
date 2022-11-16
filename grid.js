function buildGrid(gridSize, parent) {
  const cellWidth = Math.floor(screen.width / gridSize);
  const cellHeight = Math.floor(screen.height / gridSize);
  const cellSize = cellWidth > cellHeight ? cellHeight : cellWidth;

  const newGrid = document.createElement("div");
  newGrid.id = "grid";
  newGrid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let newCell = document.createElement("div");
    newCell.style.width = cellSize + "px";
    newCell.style.height = cellSize + "px";
    newCell.id = `cell${i}`;
    newCell.addEventListener("mouseover", (e) => {
      e.target.classList.remove("off");
      e.target.classList.add("on");
    });
    newCell.addEventListener("mouseout", (e) => {
      e.target.classList.remove("on");
      e.target.classList.add("off");
    });
    newGrid.appendChild(newCell);
  }

  const oldGrid = document.querySelector("#grid");
  if (oldGrid) parent.removeChild(oldGrid);

  newGrid.childNodes.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.classList.add("on");
    });
  });

  parent.appendChild(newGrid);
}

const gridSize = 10;
const content = document.querySelector("#content");
buildGrid(gridSize, content);

window.addEventListener("resize", (event) => buildGrid(gridSize, content));
