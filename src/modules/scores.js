const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tvIs41iLCOTgjlAGQnjJ/scores/';

export async function getScores () {
    const response = await fetch(scoreURL);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    const scores = await response.json();
    return scores.result;
}
