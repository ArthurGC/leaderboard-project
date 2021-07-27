import { plainHTML } from './modules/structure';
import './styles.scss';

let root = document.querySelector('#root');

document.addEventListener('DOMContentLoaded', () => {
    root.insertAdjacentHTML('beforeend', plainHTML);
})
