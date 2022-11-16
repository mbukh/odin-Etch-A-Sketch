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
  if (!e.target.classList.contains('on') && !e.target.classList.contains('off')) {
    e.target.classList.toggle("on");
    return;
  }
  e.target.classList.toggle("on");
  e.target.classList.toggle("off");
};

const gridSize = 10;
const content = document.querySelector("#content");
buildGrid(gridSize, content);

window.addEventListener("resize", (event) => buildGrid(gridSize, content));
