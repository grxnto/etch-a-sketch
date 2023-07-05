let slider = document.getElementById("myRange");
let grid_size = slider.value; // Display the default slider value
let sketch = document.querySelector(".sketch")
let grid = document.querySelector(".grid")
const colorPicker = document.getElementById('colorpicker')
const colorbutton = document.getElementById('colorB')
const rainbowbutton = document.getElementById('rainbowB')
const eraserbutton = document.getElementById('eraserB')
const clearbutton = document.getElementById('clearB')
colorbutton.onclick = () => setMode('color')
rainbowbutton.onclick = () => setMode('rainbow')
eraserbutton.onclick = () => setMode('eraser')
clearbutton.onclick = () => clearGrid()
let color = "#000000"
let mode = "color"


function clearGrid() {
    resetGrid();
    sketch.appendChild(grid);
    for (let row = 0; row < grid_size; row++) {
        let grid_row = document.createElement('div');
        grid_row.classList.add("grid_row");
        grid.appendChild(grid_row);
        for (let col = 0; col < grid_size; col++) {
            let grid_col = document.createElement('div');
            grid_col.classList.add("grid_block");
            grid_col.addEventListener('mouseover', draw)
            grid_col.addEventListener('mousedown', draw)
            grid_row.appendChild(grid_col);
        }
    }
}

colorPicker.oninput = (e) => setCurrentColor(e.target.value)

function setCurrentColor(newColor) {
    color = newColor
}

function setMode(newmode) {
    if (mode === 'rainbow') {
        rainbowB.classList.remove('active')
    } else if (mode === 'color') {
        colorB.classList.remove('active')
    } else if (mode === 'eraser') {
        eraserB.classList.remove('active')
    }
    
    if (newmode === 'rainbow') {
        rainbowB.classList.add('active')
    } else if (newmode === 'color') {
        colorB.classList.add('active')
    } else if (newmode === 'eraser') {
        eraserB.classList.add('active')
    }
    mode = newmode;
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function starter() {
    for (let row = 0; row < 16; row++) {
        let grid_row = document.createElement('div');
        grid_row.classList.add("grid_row");
        grid.appendChild(grid_row);
        for (let col = 0; col < 16; col++) {
            let grid_col = document.createElement('div');
            grid_col.classList.add("grid_block");
            grid_col.addEventListener('mouseover', draw)
            grid_col.addEventListener('mousedown', draw)
            grid_row.appendChild(grid_col);
        }
    }
    colorB.classList.add('active')
}
slider.oninput = function() {
  grid_size = this.value;
  resetGrid();
  sketch.appendChild(grid);
    for (let row = 0; row < grid_size; row++) {
        let grid_row = document.createElement('div');
        grid_row.classList.add("grid_row");
        grid.appendChild(grid_row);
        for (let col = 0; col < grid_size; col++) {
            let grid_col = document.createElement('div');
            grid_col.classList.add("grid_block");
            grid_col.addEventListener('mouseover', draw)
            grid_col.addEventListener('mousedown', draw)
            grid_row.appendChild(grid_col);
        }
    }
}
function resetGrid() {
    grid.innerHTML = '';
}
function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode == "color") {
        this.style.backgroundColor = color;
    }
    else if (mode == "rainbow") {
        this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    else if( mode == "eraser") {
        this.style.backgroundColor = '#ffffff'
    }
}  
function buttonColorChange(e) {
    colorbutton.style.backgroundColor = this.value;
}

window.onload = () => {
    starter();
}
colorPicker.addEventListener('input', buttonColorChange)