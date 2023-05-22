export default class UIManager {
    constructor({
        quoteElement,
        errorTextElement,
        accuracyTextElement,
        timeTextElement,
        ppmTextElement,
        restartButton,
        ppmGroup,
    }) {
        this.quoteElement = quoteElement;
        this.errorTextElement = errorTextElement;
        this.accuracyTextElement = accuracyTextElement;
        this.timeTextElement = timeTextElement;
        this.ppmTextElement = ppmTextElement;
        this.restartButton = restartButton;
        this.ppmGroup = ppmGroup;
    }

    updateQuote(quote) {
        this.quoteElement.textContent = null;
        quote.split("").forEach((char) => {
            const charSpan = document.createElement("span");
            charSpan.innerText = char;
            this.quoteElement.appendChild(charSpan);
        });
    }

    updateErrors(totalErrors) {
        this.errorTextElement.textContent = totalErrors;
    }

    updateAccuracy(accuracy) {
        this.accuracyTextElement.textContent = Math.round(accuracy) + "%";
    }

    updateTime(timeLeft) {
        this.timeTextElement.textContent = timeLeft + "s";
    }

    updatePPM(ppm) {
        this.ppmTextElement.textContent = ppm;
    }

    showRestartButton() {
        this.restartButton.classList.remove("hidden");
    }

    showPPMGroup() {
        this.ppmGroup.classList.remove("hidden");
    }
}
