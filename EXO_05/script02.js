const eurosInput = document.getElementById('euros');
const francsOutput = document.getElementById('francs');

eurosInput.addEventListener('keyup', convertirEnFrancs);
francsOutput.addEventListener('keyup', convertirEnEuros);

function convertirEnFrancs() {
    const eurosValue = eurosInput.value;

    if (isNaN(eurosValue)) {
        alert('Incorrect value ! Please type a number. ');
        eurosInput.value = '1';
    } else {
        const francsValue = eurosValue * 6.55957;
        francsOutput.value = francsValue.toFixed(2);
    }
}