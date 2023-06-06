export class Game {
    constructor(phases, ui) {
        this.phases = phases
        this.ui = ui
        this.currentPhaseIndex = 0
        this.currentPhase = this.phases[this.currentPhaseIndex]
        this.currentQuoteIndex = 0
        this.currentQuote = this.currentPhase.quotes[this.currentQuoteIndex]
        this.timer = null
        this.timeLeft = 0

        this.wordCount = 0
        this.correctWords = 0
        this.incorrectWords = 0
        this.accuracy = 0
        this.keystrokes = 0
        this.wordsPerMinute = 0
    }

    startGame() {
        clearInterval(this.timer)
        this.timer = setInterval(this.updateTimer.bind(this), 1000)
        this.timeLeft = this.currentPhase.timeLimit
        this.ui.showInput()
        this.ui.resetInput()
        this.ui.enableInput()
        this.ui.hidePlayGameButton()
        this.ui.hideNextPhaseButton()
        this.ui.hideRestartPhaseButton()
        this.ui.updateCorrectWords(0)
        this.ui.updateIncorrectWords(0)
        this.ui.updateWPA(0)
        this.ui.updateAccuracy(0)
        this.resetStatistics()
        this.ui.updateStatistics({
            rightWords: this.correctWords,
            wrongWords: this.incorrectWords,
            keystrokes: this.keystrokes,
            wordsPerMinute: this.wordsPerMinute,
            accuracy: this.accuracy
        })
        this.ui.updateCurrentPhaseIndex(this.currentPhaseIndex + 1)
        this.ui.updateQuote(this.currentQuote)
    }

    processInput() {
        const inputValue = this.ui.inputElement.value
        this.keystrokes++

        const quoteSpans = this.ui.quoteElement.querySelectorAll('span')
        this.ui.handleQuoteSpans(quoteSpans, inputValue.trim().split(''), {
            correctClass: 'correct_char',
            incorrectClass: 'incorrect_char'
        })
        this.handleEndgame(inputValue)
    }

    handleEndgame(text) {
        const currentQuoteIsLastQuote = this.currentPhase.quotes.length - 1 === this.currentQuoteIndex
        const currentPhaseIsLastPhase = this.phases.length - 1 === this.currentPhaseIndex
        const userFinishedQuote = text.length === this.currentQuote.length

        if (userFinishedQuote) {

            const { rightWords, wrongWords } = this.countWords(text, this.currentQuote)
            const wordCount = text.trim().split(' ').length
            this.wordCount += wordCount
            this.correctWords += rightWords
            this.incorrectWords += wrongWords

            const statistics = {
                rightWords: this.correctWords,
                wrongWords: this.incorrectWords,
                keystrokes: this.keystrokes,
                wordsPerMinute: this.wordsPerMinute,
                accuracy: this.accuracy
            }

            this.ui.updateStatistics(statistics)

            if (currentQuoteIsLastQuote) {
                const timeLimit = this.currentPhase.timeLimit
                const minutesElapsed = (timeLimit - this.timeLeft) / 60
                this.wordsPerMinute = Math.round((this.keystrokes / 5) / minutesElapsed)
                this.accuracy += (this.correctWords / this.wordCount) * 100

                statistics.wordsPerMinute = this.wordsPerMinute
                statistics.accuracy = this.accuracy
                this.ui.updateStatistics(statistics)
                this.resetStatistics()

                return currentPhaseIsLastPhase ? this.finishGame() : this.finishPhase()
            }

            return this.finishQuote()
        }
    }

    countWords(text, expectedText) {
        const typedWords = text.trim().split(' ')
        const expectedWords = expectedText.trim().split(' ')

        let rightWords = 0

        typedWords.forEach((word, index) => {
            if (word === expectedWords[index]) return rightWords++
        })

        const wrongWords = (rightWords - (expectedWords.length)) * -1

        return {
            rightWords: rightWords,
            wrongWords: wrongWords
        }
    }

    updateTimer() {
        if (this.timeLeft <= 0) return this.failedPhase()
        this.timeLeft--
        this.ui.updateTimer(this.timeLeft)
    }

    updatePhase(phase) {
        this.currentPhase = phase
    }

    updatePhaseIndex(index) {
        this.currentPhaseIndex = index
    }

    updateQuote(quote) {
        this.currentQuote = quote
    }

    updateQuoteIndex(index) {
        this.currentQuoteIndex = index
    }

    nextPhase() {
        this.updatePhaseIndex(this.currentPhaseIndex + 1)
        this.updatePhase(this.phases[this.currentPhaseIndex])
        this.updateQuoteIndex(0)
        this.updateQuote(this.currentPhase.quotes[this.currentQuoteIndex])
        this.ui.updateCurrentPhaseIndex(this.currentPhaseIndex + 1)
    }

    resetStatistics() {
        this.wordCount = 0
        this.correctWords = 0
        this.incorrectWords = 0
        this.accuracy = 0
        this.keystrokes = 0
        this.wordsPerMinute = 0
    }

    resetPhase() {
        this.updatePhaseIndex(0)
        this.updatePhase(this.phases[this.currentPhaseIndex])
    }

    resetQuote() {
        this.updateQuoteIndex(0)
        this.updateQuote(this.currentPhase.quotes[this.currentQuoteIndex])
    }

    resetGame() {
        this.resetPhase()
        this.resetQuote()
    }

    failedPhase() {
        this.resetPhase()
        this.ui.resetInput()
        this.ui.disableInput()
        this.ui.hideInput()
        this.ui.showRestartPhaseButton()
        this.ui.updateCorrectWords(0)
        this.ui.updateIncorrectWords(0)
        this.ui.updateTimer(0)
        this.ui.updateQuote("Que pena, você não conseguiu. Tente novamente.")
    }

    finishGame() {
        clearInterval(this.timer)
        this.ui.updateTimer(0)
        this.ui.disableInput()
        this.ui.hideInput()
        this.ui.showPlayGameButton()
        this.ui.updateQuote('Parabéns, você terminou o jogo.')
    }

    finishPhase() {
        clearInterval(this.timer)
        this.ui.updateTimer(0)
        this.ui.resetInput()
        this.ui.hideInput()
        this.ui.showRestartPhaseButton()
        this.ui.showNextPhaseButton()
        this.ui.updateQuote(`Você terminou a ${this.currentPhaseIndex + 1} fase.`)
    }

    finishQuote() {
        this.updateQuoteIndex(this.currentQuoteIndex + 1)
        this.updateQuote(this.currentPhase.quotes[this.currentQuoteIndex])
        this.ui.updateQuote(this.currentQuote)
        this.ui.resetInput()
    }
}
