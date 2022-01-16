const container = document.querySelector(".container");

for (let i = 0; i<15 ;i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("box")
    div.classList.add("row")
    for (let j = 0; j < 15; j++) {
        const divv = document.createElement("div");
        div.appendChild(divv);
        divv.classList.add("box")
    }
}