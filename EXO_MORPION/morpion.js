const box = document.createElement("div")

box.classList.add("box")

const board = document.querySelector("#board")
 
let nbBox = 9

for (let i = 1; i <= nbBox; i++){
    let newbox = box.cloneNode()
    board.appendChild(newbox)
    newbox.textContent = 'O'

    function transformer(box){

        if (box.classList.contains("box-transform")){

        } else {

            box.classList.add("box-transform")
        }
    }

    newbox.addEventListener("click", function(){
        transformer(newbox)
    })
}