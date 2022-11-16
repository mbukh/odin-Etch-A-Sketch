function buildGrid(gridSize, parent) {
  const cellWidth = Math.floor(window.innerWidth / gridSize);
  const cellHeight = Math.floor(window.innerHeight / gridSize);
  const cellSize = cellWidth < cellHeight ? cellWidth : cellHeight;

  const newGrid = document.createElement("div");
  newGrid.id = "grid";
  newGrid.style.cssText = `grid-template-columns: repeat(${gridSize}, ${cellSize}px);`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let newCell = document.createElement("div");
    newCell.style.width = cellSize + "px";
    newCell.style.height = cellSize + "px";
    newCell.addEventListener("mouseover", toggleClass);
    newCell.addEventListener("mouseout", toggleClass);
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

toggleClass = (e) => {
  if (
    !e.target.classList.contains("on") &&
    !e.target.classList.contains("off")
  ) {
    e.target.classList.toggle("on");
    return;
  }
  e.target.classList.toggle("on");
  e.target.classList.toggle("off");
};

let gridSize = 16;
const content = document.querySelector("#content");
buildGrid(gridSize, content);

window.addEventListener("resize", (event) => buildGrid(gridSize, content));

const gridSizeButton = document.querySelector("#gridSizeButton");
gridSizeButton.addEventListener("click", (e) => {
  const promptAnswer = prompt("New grid size (max 100):", 16);
  gridSize = Number.parseInt(promptAnswer);
  if (gridSize > 0 && gridSize < 100) buildGrid(gridSize, content);
});
