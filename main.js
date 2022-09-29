const drawingBoard = document.getElementById("drawingBoard");

let columns = document.getElementsByClassName(".columns");

function btnClick() {
  var btnChoice = document.querySelectorAll(".btn");
  btnChoice.forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.id) {
        removeGrid();
        createGrid(gridSize(btn.id));
      }
    })
  );
}

function draw() {
  let gridHover = document.querySelectorAll(".grid");
  gridHover.forEach((grid) =>
    grid.addEventListener("hover", () => {
      if (grid.class) {
        grid.setProperty("background-color: black");
      }
    })
  );
}

function gridSize(size) {
  if (size == "small") {
    return 16;
  } else if (size == "medium") {
    return 32;
  } else {
    return 64;
  }
}

function createGrid(num) {
  for (let i = 0; i < num * num; i++) {
    let row = document.createElement("div");
    drawingBoard.appendChild(row).className = "grid";
    row.addEventListener("mouseover", () => colorGrid(row));
  }
  drawingBoard.style.setProperty(
    "grid-template-columns",
    `repeat(${num}, 2fr)`
  );
  drawingBoard.style.setProperty("grid-template-rows", `repeat(${num}, 2fr)`);
}

function removeGrid() {
  while (drawingBoard.firstChild) {
    drawingBoard.removeChild(drawingBoard.firstChild);
  }
}

function colorGrid(square) {
  square.classList.add("black");
}

btnClick();
