function buildGrid(gridSize, parent) {
  const cellWidth = Math.ceil(screen.width / gridSize);
  const cellHeight = Math.ceil(screen.height / gridSize);
  const cellSize = cellWidth > cellHeight ? cellHeight : cellWidth;

  const newDiv = document.createElement("div", {});
  newDiv.style.width = cellSize + "px";
  newDiv.style.height = cellSize + "px";
  newDiv.id = "grid";
  

  for (let i = 0; i < gridSize*gridSize; i++) {
      newDiv.cloneNode();
    }
    
    const gridOldDiv = document.querySelector("#grid");
    if (gridOldDiv) parent.removeChile(gridOldDiv);

    parent.appendChild(newDiv);
}

const gridSize = 16;
const content = document.querySelector("#content");
buildGrid(gridSize, content);
