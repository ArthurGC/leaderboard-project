import { name } from './name.js';

const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

export const createGame = async () => {
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
  }

  const game = await response.json();
  return game;
}

const table = document.querySelector('.table');

export const createTable = (array) => {
  table.innerHTML = '<tr><th>Name</th><th>Score</th></tr>';
  array.forEach((score) => {
    const container = document.createElement('tr');
    const nameContainer = document.createElement('td');
    const scoreContainer = document.createElement('td');
    nameContainer.textContent = score.user;
    scoreContainer.textContent = score.score;
    container.appendChild(nameContainer);
    container.appendChild(scoreContainer);
    table.appendChild(container);
  });
};

export const sortScores = (array) => array.sort((a, b) => b.score - a.score);
