function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.remove();
    })
}

const container = document.querySelector(".gridcontainer");

function fillGrid(gridSize) {
    const pixSize = 512/gridSize;

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
            const pixel = document.createElement('div');
    
            pixel.classList.add('pixel');
            pixel.style.width = `${pixSize}px`;
            pixel.style.height = `${pixSize}px`;
    
            container.appendChild(pixel);
        }
    }
}


//Initial grid creation
fillGrid(16)
setupGrid();

//Effect of slider bar
var slider = document.getElementById("slider");
const outputs = document.querySelectorAll(".value");

outputs.forEach((output) => {
    output.innerHTML = slider.value;
})

slider.oninput = function() {
    outputs.forEach((output) => {
        output.innerHTML = this.value;
    })
}

slider.onchange = function() {
    clearGrid();
    fillGrid(this.value);
    setupGrid();
}

Coloris({
    theme: 'large',
    themeMode: 'light', // light, dark, auto
  });

//Event listener to paint squares
function setupGrid() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseenter", function (e) {
            pixel.classList.add("paint");
        })
    })
}
