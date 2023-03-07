const box = document.createElement("div")

box.classList.add("box")

const board = document.querySelector("#board")
 
let nbBox = 9
let symbol = 'X'

for (let i = 1; i <= nbBox; i++){
    let newbox = box.cloneNode()
    board.appendChild(newbox)
    
    function addSymbol(box){

        if (box.textContent !== '') {
            return
        }

        box.textContent = symbol

        // 1 er Test avec un l'opérateur ternaire (! non cocluant:
         
        // symbol = (symbol === 'X') ? 'O' + box.classList.add("box-circle") : 'X' + box.classList.add("box-cross") 

        if (symbol === 'X') {
            box.classList.add("box-cross");
            symbol = 'O';
          } else {
            box.classList.add("box-circle");
            symbol = 'X';
        }
            
    } 
    
    
    newbox.addEventListener("click", function(){
        addSymbol(newbox)
    })
}