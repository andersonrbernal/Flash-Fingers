import { Game } from "./Game.js";
import { UI } from "./UI.js";
import { Phase } from "./Phase.js";
import { quotes } from './quotes.js';
import {
    WPAElement, accuracyElement, incorrectWordsElement, correctWordsElement, currentPhaseIndexElement, inputElement, nextPhaseButtonElement, keystrokesElement, playGameButtonElement, quoteElement, restartPhaseButtonElement, timeLeftElement, typingGameElement
} from './elements.js';

const elements = { WPAElement, keystrokesElement, accuracyElement, incorrectWordsElement, correctWordsElement, currentPhaseIndexElement, inputElement, nextPhaseButtonElement, playGameButtonElement, quoteElement, restartPhaseButtonElement, timeLeftElement, typingGameElement }

const phase1 = new Phase(8, { quotes: [quotes[0], quotes[1]], timeLimit: 60 })
const phase2 = new Phase(0, { quotes: [quotes[2], quotes[3]], timeLimit: 45 })
const phase3 = new Phase(7, { quotes: [quotes[4], quotes[5]], timeLimit: 35 })

const ui = new UI(elements)
const game = new Game([phase1, phase2, phase3], ui)

window.onload = function () {
    const phaseNumber = (game.currentPhaseIndex) + 1;
    game.ui.updateCurrentPhaseIndex(phaseNumber)
}

playGameButtonElement.addEventListener('click', function () {
    game.resetGame()
    game.startGame()
})

nextPhaseButtonElement.addEventListener('click', function () {
    game.nextPhase()
    game.startGame()
})

restartPhaseButtonElement.addEventListener('click', function () {
    game.resetQuote()
    game.startGame()
})

inputElement.addEventListener('input', function (e) {
    game.processInput()
})
