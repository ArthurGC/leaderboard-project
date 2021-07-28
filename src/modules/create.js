import { name } from './name.js';

const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export async function createGame () {
    const response = await fetch(gameURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
    });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    };

    const game = await response.json();
    return game;
}

let table = document.querySelector('.table');

export const createTable = (array) => {
    table.innerHTML = '';
    array.forEach(score => {
        let container = document.createElement('tr');
        let nameContainer = document.createElement('td');
        let scoreContainer = document.createElement('td');
        nameContainer.textContent = score.user;
        scoreContainer.textContent = score.score;
        container.appendChild(nameContainer);
        container.appendChild(scoreContainer);
        table.appendChild(container);
    });
}
