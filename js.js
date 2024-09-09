let screenValue = '';

function appendToScreen(value) {
    screenValue += value;
    document.getElementById('calculator-screen').innerText = screenValue;
}

function clearScreen() {
    screenValue = '';
    document.getElementById('calculator-screen').innerText = '0';
}

function calculate() {
    if (screenValue !== '') {
        let result = eval(screenValue);
        document.getElementById('calculator-screen').innerText = result;
        screenValue = '';
    }
}