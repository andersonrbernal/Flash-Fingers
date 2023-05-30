export class UI {
    constructor({
        inputElement,
        quoteElement,
        playButtonElement,
        typingGameElement,
        typingGamePresentationElement,
        currentPhaseIndexElement,
        phaseTitleElement,
        restartPhaseButtonElement,
        nextPhaseButtonElement,
        playGameButtonElement,
        timeLeftElement,
        WPAElement,
        accuracyElement,
        errorElement,
    }) {
        this.inputElement = inputElement;
        this.quoteElement = quoteElement;
        this.typingGameElement = typingGameElement;
        this.typingGamePresentationElement = typingGamePresentationElement;
        this.currentPhaseIndexElement = currentPhaseIndexElement;
        this.playButtonElement = playButtonElement;
        this.phaseTitleElement = phaseTitleElement;
        this.restartPhaseButtonElement = restartPhaseButtonElement;
        this.nextPhaseButtonElement = nextPhaseButtonElement;
        this.playGameButtonElement = playGameButtonElement;
        this.timeLeftElement = timeLeftElement;
        this.WPAElement = WPAElement;
        this.accuracyElement = accuracyElement;
        this.errorElement = errorElement;
    }

    /**
     * Updates the phase title element with the current phase index. This will inform the user which phase they are currently playing.
     * @param {currentPhaseIndex} currentPhaseIndex 
     */
    updatePhaseTitle(currentPhaseIndex) {
        this.phaseTitleElement.textContent = currentPhaseIndex;
    }

    /**
     * Updates the current phase index element with the current phase index.
     * @param {currentPhaseIndex} currentPhaseIndex 
     */
    updateCurrentPhaseIndex(currentPhaseIndex) {
        this.currentPhaseIndex.textContent = currentPhaseIndex;
    }

    /**
     * Updates the quote element with the current quote. Adds a span for each caracter of the quote, so it can be styled seperately.
     * @param {quote} quote
     */
    updateQuote(quote) {
        this.quoteElement.textContent = null;
        quote.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.innerText = char;
            this.quoteElement.appendChild(charSpan);
        })
    }

    /**
     * Updates the error element with the total of errors. 
     * @param {totalErrors} totalErrors 
     */
    updateError(totalErrors) {
        this.errorElement.textContent = totalErrors;
    }

    /**
     * Updates the time element with the current time left.
     * @param {timeLeft} timeLeft 
     */
    updateTimer(timeLeft) {
        this.timeLeftElement.textContent = timeLeft + 's';
    }

    /**
     * Updates the WPA element with the words per minute avarage.
     * @param {wordsPerMinute} wordsPerMinute 
     */
    updateWPA(wordsPerMinute) {
        this.WPAElement.textContent = wordsPerMinute;
    }

    /**
     * Updates the current phase index element.
     */
    updateCurrentPhaseIndex(index) {
        this.currentPhaseIndexElement.textContent = index;
    }

    /**
     * Updates the accuracy element with the accuracy avarage. It always keep the accuracy value as an floored integer value.
     * @param {accuracy} accuracy 
     */
    updateAccuracy(accuracy) {
        this.accuracyElement.textContent = Math.floor(accuracy) + '%';
    }

    /**
     * Hides the quote element.
     */
    hideQuote() {
        this.quoteElement.classList.remove('block')
        this.quoteElement.classList.add('hidden')
    }

    /**
     * Shows the quote element.
     */
    showQuote() {
        this.quoteElement.classList.remove('hidden')
        this.quoteElement.classList.add('block')
    }

    /**
     * Hides the restart button.
     */
    hideRestartPhaseButton() {
        this.restartPhaseButtonElement.classList.remove('block');
        this.restartPhaseButtonElement.classList.add('hidden');
    }

    /**
     * Shows the restart button.
     */
    showRestartPhaseButton() {
        this.restartPhaseButtonElement.classList.remove('hidden');
        this.restartPhaseButtonElement.classList.add('block');
    }

    /**
     * Hides the retry game button.
     */
    hidePlayGameButton() {
        this.playGameButtonElement.classList.remove('block');
        this.playGameButtonElement.classList.add('hidden');
    }

    /**
     * Shows the retry game button.
     */
    showPlayGameButton() {
        this.playGameButtonElement.classList.remove('hidden')
        this.playGameButtonElement.classList.add('block')
    }

    /**
     * 
     */
    hideNextPhaseButton() {
        this.nextPhaseButtonElement.classList.remove('block');
        this.nextPhaseButtonElement.classList.add('hidden');
    }

    /**
     * Shows the next phase button.
     */
    showNextPhaseButton() {
        this.nextPhaseButtonElement.classList.remove('hidden');
        this.nextPhaseButtonElement.classList.add('block');
    }

    /**
     * Shows the typing game element.
     */
    showTypingGame() {
        this.typingGameElement.classList.remove('hidden');
        this.typingGameElement.classList.add('block');
    }

    /**
     * Hides the typing game element.
     */
    hideTypingGame() {
        this.typingGameElement.classList.remove('block');
        this.typingGameElement.classList.add('hidden');
    }

    /**
     * Shows input element.
     */
    showInput() {
        this.inputElement.classList.remove('hidden')
        this.inputElement.classList.add('block')
    }

    /**
     * Hides the input element.
     */
    hideInput() {
        this.inputElement.classList.remove('block')
        this.inputElement.classList.add('hidden')
    }

    /**
     * Resets the reset input value.
     */
    resetInput() {
        this.inputElement.value = '';
    }

    /**
     * Disables the reset input.
     */
    disableInput() {
        this.inputElement.disabled = true;
    }

    /**
     * Enables the reset input.
     */
    enableInput() {
        this.inputElement.disabled = false;
    }

    resetAll() {
        this.resetInput();
        this.updateAccuracy(0);
        this.updateError('0');
        this.updateQuote('');
        this.updateTimer(0);
        this.updateWPA('0');
    }
}