
// On récup les éléments du DOM 

const euroInput = document.getElementById("euro-input")
const francOutput = document.getElementById("franc-output")

// Initialisation de la conversion 

function euroToFranc() {

    const euroAmount = euroInput.value
    const francAmount = euroAmount * 6.55957
    francOutput.textContent = francAmount.toFixed(2)
}

// Fonction validation de la valeur saisie dans la zone de texte

function validNumberInput() {

    const euroAmount = euroInput.value.trim()
    const euroNumber = parseFloat(euroAmount)
    
    // Fonction "isNaN" (is Not a Number)
    if (isNaN(euroAmount)) {

        alert("Please type a number")
        
    }
    
}

euroInput.addEventListener("input", euroToFranc)
euroInput.addEventListener("blur", validNumberInput)