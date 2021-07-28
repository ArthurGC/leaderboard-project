import './styles.scss';
import { createTable } from './modules/create';
import { addScore, getScores } from './modules/scores';

let submit = document.querySelector('.submit');
let refresh = document.querySelector('.refresh');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    addScore();
    getScores().then(listScore => {
        createTable(listScore);
     })
});

refresh.addEventListener('click', () => {
    getScores().then(listScore => {
       createTable(listScore);
    })
})
