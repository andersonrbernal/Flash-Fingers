import { accuracyTextElement, errorTextElement, gameInputField, ppmGroup, ppmTextElement, quoteElement, quotes, restartButton, timeTextElement } from './constants.js';
import GameManager from './GameManager.js';
import InputManager from './InputManager.js';
import QuoteManager from './QuoteManager.js';
import UIManager from './UIManager.js';

const quoteManager = new QuoteManager(quotes);
const inputManager = new InputManager(gameInputField);
const uiManager = new UIManager({
    ppmGroup: ppmGroup,
    ppmTextElement: ppmTextElement,
    accuracyTextElement: accuracyTextElement,
    quoteElement: quoteElement,
    restartButton: restartButton,
    timeTextElement: timeTextElement,
    errorTextElement: errorTextElement,
});
const gameManager = new GameManager(quoteManager, inputManager, uiManager);

gameInputField.addEventListener('focus', function () {
    gameManager.startGame()
})
gameInputField.addEventListener('input', function () {
    gameManager.processCurrentText()
})
restartButton.addEventListener('click', function () {
    gameManager.resetValues()
})