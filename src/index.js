import './styles.scss';
import { createTable, sortScores } from './modules/create.js';
import { addScore, getScores } from './modules/scores.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  getScores().then((listScore) => {
    const scores = sortScores(listScore);
    createTable(scores);
  });
  document.getElementById('form').reset();
});

refresh.addEventListener('click', () => {
  getScores().then((listScore) => {
    const scores = sortScores(listScore);
    createTable(scores);
  });
});
