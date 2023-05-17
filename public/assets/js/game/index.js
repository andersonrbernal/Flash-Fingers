const TIME_LEFT = 60;

const quotes = [
    "Faça você mesmo, pois ninguém fará isto por você.",
    "O fracasso é o tempero que dá o sabor ao sucesso.",
    "Acorde com determinação. Vá para a cama com satisfação.",
    "Vai ser difícil, mas isso não significa que é impossível.",
    "Aprender nunca cansa a mente.",
    "A única maneira de fazer um bom trabalho é amar o que você faz."
];

const quoteElement = document.querySelector("#quote");
const ppmTitle = document.querySelector("#ppm-title");
const ppmText = document.querySelector("#ppm-text");
const errorTitle = document.querySelector("#error-title");
const errorText = document.querySelector("#error-text");
const timeTitle = document.querySelector("#time-title");
const timeText = document.querySelector("#time-text");
const accuracyTitle = document.querySelector("#accuracy-title");
const accuracyText = document.querySelector("#accuracy-text");
const ppmGroup = document.querySelector("#ppm-group");
const errorGroup = document.querySelector("#error-group");
const timeGroup = document.querySelector("#time-group");
const accuracyGroup = document.querySelector("#accuracy-group");
const gameInputField = document.querySelector("#inputField");
const restartButton = document.querySelector("#restart-button");

let timeLeft = TIME_LEFT;
let timeElapsed = 0;
let totalErrors = 0;
let errors = 0;
let accuracy = 0;
let keystrokes = 0;
let currentQuote = "";
let quoteNumber = 0;
let timer = null;

function updateQuote() {
    quoteElement.textContent = null;
    currentQuote = quotes[quoteNumber];

    currentQuote.split("").forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.innerText = char;
        quoteElement.appendChild(charSpan);
    });

    quoteNumber = (quoteNumber + 1) % quotes.length;
}

function processCurrentText() {
    const currentInput = gameInputField.value;
    const currentInputCharacters = currentInput.split("");

    keystrokes++;
    errors = 0;

    const quoteSpans = quoteElement.querySelectorAll("span");
    quoteSpans.forEach((char, index) => {
        let typedChar = currentInputCharacters[index];

        if (typedChar == null) {
            char.classList.remove("correct_char", "incorrect_char");
        } else if (typedChar === char.innerText) {
            char.classList.add("correct_char");
            char.classList.remove("incorrect_char");
        } else {
            char.classList.add("incorrect_char");
            char.classList.remove("correct_char");
            errors++;
        }
    });

    errorText.textContent = totalErrors + errors;

    let correctKeystrokes = keystrokes - (totalErrors + errors);
    let accuracyValue = (correctKeystrokes / keystrokes) * 100;
    accuracyText.textContent = Math.round(accuracyValue) + "%";

    const userAlreadyFinishedTypingQuote = currentInput.length === currentQuote.length;
    if (userAlreadyFinishedTypingQuote) {
        updateQuote();
        totalErrors += errors;
        gameInputField.value = "";
    }
}

function startGame() {
    resetValues();
    updateQuote();

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetValues() {
    timeLeft = TIME_LEFT;
    timeElapsed = 0;
    errors = 0;
    totalErrors = 0;
    accuracy = 0;
    keystrokes = 0;
    quoteNumber = 0;

    gameInputField.disabled = false;
    gameInputField.value = "";
    quoteElement.textContent = "Clique na área abaixo para começar.";
    accuracyText.textContent = "0%";
    timeText.textContent = timeLeft + "s";
    restartButton.classList.remove("hidden");
    ppmGroup.classList.remove("hidden");
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeElapsed++;
        timeText.textContent = timeLeft + "s";
    } else {
        finishGame();
    }
}

function finishGame() {
    clearInterval(timer);

    gameInputField.disabled = true;
    quoteElement.textContent = "Clique em recomeçar para iniciar um novo jogo.";
    restartButton.classList.remove("hidden");

    const ppm = Math.round(((keystrokes / 5) / timeElapsed) * 60);

    ppmText.textContent = ppm;

    ppmGroup.classList.remove("hidden");
}
