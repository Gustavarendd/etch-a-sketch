const drawingBoard = document.getElementById("drawingBoard");
let rows = document.getElementsByClassName(".gridRow");
let columns = document.getElementsByClassName(".columns");

function btnClick() {
  var btnChoice = document.querySelectorAll(".btn");
  btnChoice.forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.id) {
        createRows(gridSize(btn.id));
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

function createRows(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    drawingBoard.appendChild(row).className = "gridRow";
  }
}

function createColumns(num) {}
btnClick();
