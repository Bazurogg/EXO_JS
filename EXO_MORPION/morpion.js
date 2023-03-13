const box = document.createElement("div")

box.classList.add("box")

const board = document.querySelector("#board")
const players = ["Player 01", "Player 02"]


let nbBox = 9
let symbol = 'X'
let turnCntr = 0
let gameOver = false
// console.log (players())
document.getElementById('player-turn').innerHTML = "Go " + '[ ' + symbol + ' ]' + " you start !"

console.log (players)

const resetButton = document.getElementById('reset-button')

resetButton.addEventListener('click', function() {

    location.reload()

})

for (let i = 1; i <= nbBox; i++){

    let newbox = box.cloneNode()
    board.appendChild(newbox)
    
    function addSymbol(box){


        // On ajoute un check pour empêcher le re-clic sur une box 

        if (box.textContent !== '') {
            return
        }

        box.textContent = symbol

        // 1 er Test avec un l'opérateur ternaire 
        // (! non concluant: Affichage d'une erreur lors du clic)
        // symbol = (symbol === 'X') ? 'O' + box.classList.add("box-circle") : 'X' + box.classList.add("box-cross") 

        // 2 nd choix en splitant la condition avec "if": ( ! fonctionne )

        if (symbol === 'X') {

            box.classList.add("box-cross");
            symbol = 'O';

        } else {

            box.classList.add("box-circle");
            symbol = 'X';

        }

        turnCntr = turnCntr + 1
        document.getElementById('counter-turn').innerHTML = "Turn N° : " + turnCntr
        console.log ("Tours N° :" + turnCntr)        
        document.getElementById('player-turn').innerHTML = '[ ' + symbol + ' ]' + " it's your turn !"
        
    }
    
    newbox.addEventListener("click", function(){
        addSymbol(newbox)

        if (turnCntr === 9) {

            const boxes = document.querySelectorAll('.box')
            
            document.getElementById('player-turn').innerHTML = "(T _ T)"
            
            setTimeout(function() {
                
                alert('GAME OVER !')


                boxes.forEach(function(box) {
                    box.style.pointerEvents = 'none';
                })

                resetButton.style.visibility = 'visible'

            }, 200)
            
        }
    })
    
    // Méthode "removeEventListener()"
    // function boxClick() {
    
    //     addSymbol(newbox)

    //     if (turnCntr === 9) {

    //         gameOver = true
            
    //         setTimeout(function() {
    //             if (gameOver) {
    //                 alert('Game over ! Click on Restart Button')
    //             }
    //         }, 500)

    //         newbox.removeEventListener("click", boxClick)
        
    //     }
    // }
    
    // newbox.addEventListener("click", boxClick)
   
}