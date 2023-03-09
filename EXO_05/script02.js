const eurosInput = document.getElementById('euros');
const francsOutput = document.getElementById('francs');

eurosInput.addEventListener('keyup', convertirEnFrancs);
francsOutput.addEventListener('keyup', convertirEnEuros);

function convertirEnFrancs() {
    const eurosValue = eurosInput.value;

    if (isNaN(eurosValue)) {
        alert('Merci de saisir un nombre. Conversion Impossible.');
        eurosInput.value = '1';
    } else {
        const francsValue = eurosValue * 6.55957;
        francsOutput.value = francsValue.toFixed(2);
    }
}

function convertirEnEuros() {
    const francsValue = francsOutput.value;

    if (isNaN(francsValue)) {
        alert('Merci de saisir un nombre. Conversion Impossible.');
        francsOutput.value = eurosInput.value * 6.55957;
    } else {
        const eurosValue = francsValue / 6.55957;
        eurosInput.value = eurosValue.toFixed(2);
    }
}