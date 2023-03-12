
const board = document.querySelector("#board")

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}

document.addEventListener('keydown', function(event){
  
  if (event.key === "ArrowDown"){
    
    if (board.querySelectorAll(".box").length < 225){ // On va limiter le nombre de "box" contenues dans le "#board"
      
      event.preventDefault() // supprime l' event par défaut de la touche

      const posBox = board.querySelectorAll(".box").length
      const box = document.createElement("div")
      const targetBox = [5,6,7,8,9,18,19,25,26,32,42,46,61,58,73,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,96,97,98,99,102,104,105,107,108,109,111,113,114,115,117,119,120,123,124,125,129,130,131,134,135,149,151,154,163,166,170,171,172,173,178,182,192,198,199,205,206,215,216,217,218,219]

      box.innerText = board.querySelectorAll(".box").length
      box.classList.add("box")
      box.style.backgroundColor = getRandomColor()
      board.appendChild (box);

      if (targetBox.includes(posBox)) { // On check si la case N° ("posBox") est incluse dans le array "targetBox" grâce à la méthode "includes" pour remplacer la syntaxe ( posBox ===  5 || posBox ===  6 || etc.)

        box.style.cursor = 'pointer';
        box.addEventListener("click", function() {
          box.style.backgroundColor = 'black'
        })
      }     
    }
    
  } else if (event.key === "ArrowUp"){

    event.preventDefault() // supprime l' event par défaut de la touche
    board.removeChild(board.lastElementChild)
  
    //Exemple récupérer sur W3School :
    // function myFunction() {
    //     const list = document.getElementById("myList");
    //     list.removeChild(list.lastElementChild);
    // }

  }
  

  
})