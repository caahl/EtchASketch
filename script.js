const DEFAULT_SIZE = 16;
const container = document.querySelector('#container');

const button = document.querySelector("#newGrid");
button.addEventListener("click", setGridSize, false);

function setupGrid(size) {

    for (i = 1; i <= size * size; i++) {
        let square = document.createElement('div');
        square.className = "square";
        square.id = i;
        square.style.width = 100 / size +"%";
        square.style.height = 100 / size +"%";

        square.addEventListener("mouseover", function (e) {
            square.style.backgroundColor = "black";
        })

        container.appendChild(square);
    }
}

function clearGrid() {
    container.innerHTML = "";
  }

function setGridSize() {
    do {
        size = prompt("How many squares per side of the new grid? (0 - 100)")
    } while (size > 100 || size < 0)

    clearGrid();
    setupGrid(size);
}


window.onload = () => {
    setupGrid(DEFAULT_SIZE);
  }