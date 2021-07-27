import { plainHTML } from './modules/structure.js';
import './styles.scss';

const root = document.querySelector('#root');

document.addEventListener('DOMContentLoaded', () => {
  root.insertAdjacentHTML('beforeend', plainHTML);
});
