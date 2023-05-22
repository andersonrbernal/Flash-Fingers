export default class QuoteManager {
    constructor(quotes) {
        this.quotes = quotes;
        this.currentQuote = "";
        this.quoteIndex = 0;
    }

    getNextQuote() {
        this.currentQuote = this.quotes[this.quoteIndex];
        this.quoteIndex = (this.quoteIndex + 1) % this.quotes.length;
        return this.currentQuote;
    }
}