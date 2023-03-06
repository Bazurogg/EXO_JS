const box = document.createElement("div")

box.classList.add("box")

const board = document.querySelector("#board")
 
let nbBox = 4

for (let i = 1; i <= nbBox; i++){
    let newbox = box.cloneNode()
    newbox.innerText = i
    board.appendChild(newbox)

    function transformer(box){
        if (box.classList.contains("box-transform")){
            box.classList.remove("box-transform")
        } else {
            box.classList.add("box-transform")
        }
    }
    newbox.addEventListener("click", function(){
        transformer(newbox)
    })
}