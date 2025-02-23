// KALKULATOR PROGRAM

const display = document.getElementById("skjerm");
let previousInput = "";

function clearSkjerm(){
    display.value = "";
    previousInput = "";
    display.classList.remove("error");
}

function appendToSkjerm(input) {
    if (display.value === "feil, for mange siffer.." || display.value === "Error") {
        display.value = previousInput;
        display.classList.remove("error");
    }
    let newValue = display.value + input;
    let digitCount = newValue.replace(/[^0-9]/g, '').length;
    if (digitCount > 9) {
        display.value = "feil, for mange siffer..";
        display.classList.add("error");
    } else {
        display.value = newValue;
        previousInput = newValue;
    }
}

function calculate() {
    try {
        let result = eval(display.value);
        let resultDigits = result.toString().replace(/[^0-9]/g, '');
        if (resultDigits.length > 7) {
            result = Number(result).toPrecision(7);
            display.value = "≈" + result;
            display.classList.remove("error");
        } else {
            display.value = result;
            display.classList.remove("error");
        }
        previousInput = display.value;
    } catch (error) {
        display.value = "Error";
        display.classList.add("error");
    }
}

function backSpace() {
    if (display.value === "feil, for mange siffer.." || display.value === "Error") {
        display.value = previousInput;
        display.classList.remove("error");
    } else {
        display.value = display.value.slice(0, -1);
        previousInput = display.value;
    }
}

