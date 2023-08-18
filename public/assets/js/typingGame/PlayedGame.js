export class PlayedGame {
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
            wordsPerMinute: Math.round(averageWordsPerMinute),
            keystrokes: Math.round(averageKeystrokes),
            correctWords: Math.round(averageCorrectWords),
            incorrectWords: Math.round(averageIncorrectWords),
            accuracy: Math.round(averageAccuracy)
        };
    }

    static getCookie(cookieName) {
        let cookie = {}
        const cookies = document.cookie.split(';')

        cookies.forEach(cookieValue => {
            let [key, value] = cookieValue.split('=')
            cookie[key.trim()] = value
        })

        return cookie[cookieName]
    }

    static async save(results, { user_id = null, csrfToken = null }) {
        if (!user_id) return { data: null, error: 'No user id provided.' }
        if (!csrfToken) return { data: null, error: 'No CSRF token provided.' }

        try {
            const uri = '/played-game'
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text-plain, */*',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN': csrfToken
            }
            const body = {
                'wordsPerMinute': results.wordsPerMinute,
                'keystrokes': results.keystrokes,
                'correctWords': results.correctWords,
                'incorrectWords': results.incorrectWords,
                'accuracy': results.accuracy,
                'user_id': parseInt(user_id)
            }
            console.log(body)
            const options = { body: JSON.stringify(body), method: 'POST', headers: headers, mode: 'cors' }

            const response = await fetch(uri, options)
            console.log(response)
            const data = await response.json()

            return { data: data, error: null };
        } catch (error) {
            return { data: null, error: error };
        }
    }
}
