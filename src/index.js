import './styles.css';
import Icon from './assets/img/pokemon.png';
import displayPokemons from './modules/displayPokemons.js';
import PopUp from './modules/popUp.js';

const logoDiv = document.getElementById('logo');
const pokemonsContainer = document.querySelector('.pokemons-container');
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');

const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList = 'logo-img';
logoDiv.appendChild(myIcon);

window.onload = () => {
  displayPokemons();
};

pokemonsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('comments')) {
    modal.style.display = 'block';
    PopUp(e.target.id);
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  }
});
