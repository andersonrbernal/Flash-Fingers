export default class GameManager {
    constructor(quoteManager, inputManager, uiManager) {
        this.quoteManager = quoteManager;
        this.inputManager = inputManager;
        this.uiManager = uiManager;

        this.timeLeft = 60;
        this.timeElapsed = 0;
        this.totalErrors = 0;
        this.errors = 0;
        this.accuracy = 0;
        this.keystrokes = 0;
        this.timer = null;
    }

    startGame() {
        this.resetValues();
        this.updateQuote();

        clearInterval(this.timer);
        this.timer = setInterval(this.updateTimer.bind(this), 1000);
        this.inputManager.enableInput();
    }

    #resetStatistics() {
        this.timeLeft = 60;
        this.timeElapsed = 0;
        this.errors = 0;
        this.totalErrors = 0;
        this.accuracy = 0;
        this.keystrokes = 0;
        this.quoteManager.quoteIndex = 0;
    }

    #resetAllElements() {
        this.inputManager.enableInput();
        this.inputManager.clearInput();
        this.uiManager.updateQuote("Clique na área abaixo para começar.");
        this.uiManager.updateAccuracy(0);
        this.uiManager.updateTime(this.timeLeft);
        this.uiManager.showRestartButton();
        this.uiManager.showPPMGroup();
    }

    resetValues() {
        this.#resetStatistics()
        this.#resetAllElements()
    }

    updateQuote() {
        const quote = this.quoteManager.getNextQuote();
        this.uiManager.updateQuote(quote);
    }

    processCurrentText() {
        const currentInput = this.inputManager.inputElement.value;
        const currentInputCharacters = currentInput.split("");
        this.keystrokes++;

        this.errors = 0;

        const quoteSpans = this.uiManager.quoteElement.querySelectorAll("span");
        quoteSpans.forEach((char, index) => {
            let typedChar = currentInputCharacters[index];
            const typedCharIsNull = typedChar == null;
            const typedCharIsEqualToQuoteChar = typedChar === char.innerText;

            if (typedCharIsNull) {
                char.classList.remove("correct_char", "incorrect_char");
                return;
            }
            if (typedCharIsEqualToQuoteChar) {
                char.classList.add("correct_char");
                char.classList.remove("incorrect_char");
                return;
            }

            char.classList.add("incorrect_char");
            char.classList.remove("correct_char");
            this.errors++;
        });

        this.uiManager.updateErrors(this.totalErrors + this.errors);

        let correctKeystrokes = this.keystrokes - (this.totalErrors + this.errors);
        let accuracyValue = (correctKeystrokes / this.keystrokes) * 100;
        this.uiManager.updateAccuracy(accuracyValue);

        const userAlreadyFinishedTypingQuote =
            currentInput.length == this.quoteManager.currentQuote.length;
        if (userAlreadyFinishedTypingQuote) {
            this.updateQuote();
            this.totalErrors += this.errors;
            this.inputManager.clearInput();
        }
    }

    updateTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
            this.timeElapsed++;
            this.uiManager.updateTime(this.timeLeft);
        } else {
            this.finishGame();
        }
    }

    finishGame() {
        clearInterval(this.timer);
        this.inputManager.disableInput();
        this.uiManager.updateQuote("Clique em recomeçar para iniciar um novo jogo.");
        this.uiManager.showRestartButton();

        const ppm = Math.round((this.keystrokes / 5 / this.timeElapsed) * 60);
        this.uiManager.updatePPM(ppm);
        this.uiManager.showPPMGroup();
    }
}