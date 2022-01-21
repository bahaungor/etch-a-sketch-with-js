const colorPicker = document.querySelector(".color-picker")
const buttons = document.querySelectorAll(".button")
const colorModeButton = document.querySelector(".color-mode")
const rainbowModeButton = document.querySelector(".rainbow-mode")
const ereaserButton = document.querySelector(".ereaser")
const clearButton = document.querySelector(".clear")
const pixelStatus = document.querySelector(".pixel-status")
const slider = document.querySelector(".slider");
const container = document.querySelector(".grid-container");
let gridSize;
colorPicker.value = "#333333";
slider.addEventListener("mouseup", updateGridSize);//Update grid size based on slider
slider.addEventListener("input", updatePixelStatus);//Update pixel status as you drag slider
colorModeButton.addEventListener("click", selectColorMode);
rainbowModeButton.addEventListener("click", selectRainbowMode);
ereaserButton.addEventListener("click", ereaserMode);
clearButton.addEventListener("click", clearAll)

//Create default 16x16 grid & add event listener to each grid item
container.innerHTML = "";
for (let i = 0; i<16*16 ;i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}
container.style.cssText = "grid-template-columns: repeat(" + 16 + ", 1fr)";
gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", paintGrid));

//Update grid size & add event listener to each grid item
function updateGridSize(e) {
    console.log("update grid size function is called");
    container.innerHTML = "";
    gridSize = e.target.value;
    for (let i = 0; i<Math.pow(gridSize,2) ;i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    container.style.cssText = "grid-template-columns: repeat(" + e.target.value + ", 1fr)";
    gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", paintGrid));
}

function updatePixelStatus(e){
    pixelStatus.textContent = e.target.value + "x" + e.target.value;
}

//Paint grid based on button selection (by class)
function paintGrid(){
    if(colorModeButton.classList.contains("selected")){
        this.style.backgroundColor = colorPicker.value;
    } else if(rainbowModeButton.classList.contains("selected")){
        this.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    } else {
        this.style.backgroundColor = "#f8f8ff";
    }
 
}

function selectColorMode(){
    buttons.forEach(button => button.classList.remove("selected"));
    colorModeButton.classList.add("selected");
}

function selectRainbowMode(){
    buttons.forEach(button => button.classList.remove("selected"));
    rainbowModeButton.classList.add("selected");
}

function ereaserMode(){
    buttons.forEach(button => button.classList.remove("selected"));
    ereaserButton.classList.add("selected");
}

function clearAll(){
    gridItems.forEach(gridItem => gridItem.style.backgroundColor = "#f8f8ff");
}