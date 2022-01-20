const container = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");

for (let i = 0; i<16*16 ;i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
}
container.style.cssText = "grid-template-columns: repeat(" + 16 + ", 1fr)";

slider.addEventListener("input", function(e){
    console.log(e.target.value);
    for (let i = 0; i<e.target.value ;i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        container.appendChild(div);
    }
    container.style.cssText = "grid-template-columns: repeat(" + e.target.value + ", 1fr)";
} );