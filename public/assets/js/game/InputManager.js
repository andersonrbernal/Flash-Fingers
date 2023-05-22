export default class InputManager {
    constructor(inputElement) {
        this.inputElement = inputElement;
    }

    clearInput() {
        this.inputElement.value = "";
    }

    disableInput() {
        this.inputElement.disabled = true;
    }

    enableInput() {
        this.inputElement.disabled = false;
        this.inputElement.focus();
    }
}