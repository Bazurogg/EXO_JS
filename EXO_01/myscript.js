const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
board.appendChild(box)
box.innerText = "HELLO !"
box.addEventListener("click", function(){
    let className = box.getAttribute("class")
    let style = window.getComputedStyle(box)
    let classAttributes = ""
    for (let i = 0; i < style.length; i++){
        let attribute = style[i]
        if (attribute === "background-color" || attribute === "color" || attribute === "height" || attribute === "width" || attribute === "display"){

            let attributeFormat = attribute.replace(/^[a-z]/g, function(match){
                return match.toUpperCase() + match.slice(1)
            })
            classAttributes += "- " + attributeFormat + " : " + style.getPropertyValue(style[i]) + "\n"
        }
    }    
    alert("Class Name : " + className + "\n\n" + classAttributes + "- Font: " + style.getPropertyValue("font-family") + " (" + style.getPropertyValue("font-size") + ")")
})