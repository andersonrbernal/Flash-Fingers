export class PlayedGame {
    constructor({
        wordsPerMinute,
        keystrokes,
        correctWords,
        incorrectWords,
        accuracy,
        user_id
    }) {
        this.wordsPerMinute = wordsPerMinute;
        this.keystrokes = keystrokes;
        this.correctWords = correctWords;
        this.incorrectWords = incorrectWords;
        this.accuracy = accuracy;
        this.user_id = user_id;
    }

    static calculateAverage(playedPhasesResults = []) {
        if (playedPhasesResults.length === 0) return null;

        const totalPhases = playedPhasesResults.length;

        let sumWordsPerMinute = 0;
        let sumKeystrokes = 0;
        let sumCorrectWords = 0;
        let sumIncorrectWords = 0;
        let sumAccuracy = 0;

        playedPhasesResults.forEach(result => {
            sumWordsPerMinute += result.wordsPerMinute;
            sumKeystrokes += result.keystrokes;
            sumCorrectWords += result.rightWords;
            sumIncorrectWords += result.wrongWords;
            sumAccuracy += result.accuracy;
        });

        const averageWordsPerMinute = sumWordsPerMinute / totalPhases;
        const averageKeystrokes = sumKeystrokes / totalPhases;
        const averageCorrectWords = sumCorrectWords / totalPhases;
        const averageIncorrectWords = sumIncorrectWords / totalPhases;
        const averageAccuracy = sumAccuracy / totalPhases;

        return {
            averageWordsPerMinute: Math.round(averageWordsPerMinute),
            averageKeystrokes: Math.round(averageKeystrokes),
            averageCorrectWords: Math.round(averageCorrectWords),
            averageIncorrectWords: Math.round(averageIncorrectWords),
            averageAccuracy: Math.round(averageAccuracy)
        };
    }
}
