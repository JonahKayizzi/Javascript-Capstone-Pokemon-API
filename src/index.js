import './styles.css';
import Icon from './assets/img/pokemon.png';

const logoDiv = document.getElementById('logo');

const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList = 'logo-img';
logoDiv.appendChild(myIcon);
