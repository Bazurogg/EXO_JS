

const board = document.querySelector("#board")

document.addEventListener('keydown', function(event){
    if (event.key === "ArrowDown"){
        const box = document.createElement("div")
        box.classList.add("box")
        board.appendChild (box)
    }

})