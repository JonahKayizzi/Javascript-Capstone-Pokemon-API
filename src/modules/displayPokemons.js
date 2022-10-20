import createHTMLElement from './createHTMLelement.js';
import getLikes from './getLikes.js';
import postLikes from './postLikes.js';

export default async () => {
  const pokemonsContainer = document.querySelector('.pokemons-container');
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=6&offset=888',
  );
  const result = await response.json();
  // pokemonsContainer.innerHTML = '';
  result.results.forEach((pokemon) => {
    const [, , , , , , pokemonId] = pokemon.url.split('/');
    const pokemonSummary = createHTMLElement(
      'div',
      'pokemon-summary flex-col',
      'pokemon-summary',
      '',
      pokemonsContainer,
    );

    const pokemonImage = createHTMLElement(
      'div',
      'pokemon-image',
      'pokemon-image',
      '',
      pokemonSummary,
    );
    pokemonImage.style.background = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png") 50% 0 no-repeat`;
    pokemonImage.style.backgroundSize = 'contain';

    const nameContainer = createHTMLElement(
      'div',
      'name-container flex-row',
      'name-container',
      '',
      pokemonSummary,
    );

    createHTMLElement(
      'p',
      'pokemon-name',
      'pokemon-name',
      `${pokemon.name}`,
      nameContainer,
    );

    const likeIcon = createHTMLElement(
      'i',
      'icons fa fa-heart-o',
      'fa fa-heart-o',
      '',
      nameContainer,
    );
    likeIcon.ariaHidden = true;

    const likeEle = createHTMLElement(
      'p',
      'likes-number',
      'likes-number',
      '',
      pokemonSummary,
    );

    getLikes(pokemonId).then((value) => {
      likeEle.innerHTML = `${value.likes || 0} likes`;
    });

    createHTMLElement(
      'button',
      'comments',
      `${pokemonId}`,
      'Comments',
      pokemonSummary,
    );

    likeIcon.addEventListener('click', () => {
      likeIcon.classList = 'icons fa fa-heart';
      postLikes(pokemonId);
      setTimeout(() => {
        getLikes(pokemonId).then((value) => {
          likeEle.innerHTML = `${value.likes || 0} likes`;
        });
      }, 1000);
    });
  });
};
