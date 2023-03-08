

const board = document.querySelector("#board")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

document.addEventListener('keydown', function(event){

    if (event.key === "ArrowDown"){
        event.preventDefault() // supprime l' event par défaut de la touche
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.backgroundColor = getRandomColor()
        board.appendChild (box)
    }
    
    if (event.key === "ArrowUp"){
        // event.preventDefault() // supprime l' event par défaut de la touche
        const box = document.getElementById("box")
        const board = document.querySelector("#board")
        box.board.removeChild(box)


        // function myFunction() {
        //     const list = document.getElementById("myList");
        //     list.removeChild(list.lastElementChild);
    }

})