

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
      const box = document.createElement("div")
      box.classList.add("box")
      box.style.backgroundColor = getRandomColor()
      board.appendChild (box);

      if (board.querySelectorAll(".box").length === 6 || board.querySelectorAll(".box").length === 7 || board.querySelectorAll(".box").length === 8 || board.querySelectorAll(".box").length === 9 || board.querySelectorAll(".box").length === 10) {
        box.style.cursor = 'pointer';
        box.addEventListener("click", function() {
           box.classList.add("box-transform")
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