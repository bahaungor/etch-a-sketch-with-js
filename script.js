const colorPicker = document.querySelector("input[type='color']");
const buttons = document.querySelectorAll(".color-mode,.rainbow-mode,.ereaser");
const colorModeButton = document.querySelector('.color-mode');
const rainbowButton = document.querySelector('.rainbow-mode');
const clearButton = document.querySelector('.clear');
const slider = document.querySelector(".pixel-size-inner-container input");
const pixelSize = document.querySelector('.pixel-size-container h2');
const grid = document.querySelector(".grid");

buttons.forEach(button => button.addEventListener("click", buttonClasser))
clearButton.addEventListener('click', createGrid)
slider.addEventListener('input', createGrid)

function buttonClasser(){
    removeActives(buttons)
    this.classList.add('active')
}

function removeActives(nodes){
    nodes.forEach(node => node.classList.remove('active'))
}

function createGrid(){
    grid.innerHTML = '';
    pixelSize.textContent = `${slider.value} x ${slider.value}`;
    for (let i = 0; i < slider.value; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow);
        for (let j = 0; j < slider.value; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridRow.appendChild(gridItem);
            gridItem.addEventListener("mouseenter", paint)
        }
    }
    colorPicker.value = '#333333'
}

function paint(){
    if (rainbowButton.classList.contains('active')){
        this.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    } else if (colorModeButton.classList.contains('active')){
        this.style.backgroundColor = colorPicker.value;
    } else {
        this.style.backgroundColor = '#eeeeee'
    }
}

window.addEventListener('load', createGrid)
