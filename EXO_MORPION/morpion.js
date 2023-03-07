const box = document.createElement("div")

box.classList.add("box")

const board = document.querySelector("#board")
 
let nbBox = 9

for (let i = 1; i <= nbBox; i++){
    let newbox = box.cloneNode()
    board.appendChild(newbox)
    
    function addSymbol(box){
        box.classList.add("box-circle")
    }
    
    newbox.addEventListener("click", function(){
        addSymbol(newbox)
        newbox.textContent = 'O'
    })
}