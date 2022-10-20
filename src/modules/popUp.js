import createHTMLelement from './createHTMLelement.js';
import Forms from './createFormElements.js';

export default async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
  );

  const result = await response.json();
  const modal = document.querySelector('.modal-content');

  createHTMLelement(
    'span',
    'close',
    'close',
    '&times;',
    modal,
  );

  const pokemonSummary = createHTMLelement(
    'div',
    'pokemon-summary-modal flex-col',
    'pokemon-summary',
    '',
    modal,
  );

  const pokemonImage = createHTMLelement(
    'div',
    'pokemon-image-modal',
    'pokemon-image',
    '',
    pokemonSummary,
  );

  pokemonImage.style.background = `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png") 50% 0 no-repeat`;
  pokemonImage.style.backgroundSize = 'contain';

  const nameContainer = createHTMLelement(
    'div',
    'name-container flex-row',
    'name-container',
    '',
    pokemonSummary,
  );

  createHTMLelement(
    'p',
    'pokemon-name',
    'pokemon-name',
    `${result.name}`,
    nameContainer,
  );

  const healthStats = createHTMLelement(
    'div',
    'stats-container flex-row-module',
    'stats-container',
    '',
    pokemonSummary,
  );

  createHTMLelement(
    'span',
    'pokemon-name span-size',
    'stats-hp',
    `HP: <span class="status-text">${result.stats[0].base_stat}</span>`,
    healthStats,
  );

  createHTMLelement(
    'span',
    'pokemon-name span-size',
    'type',
    `Type: <span class="status-text">${result.types[0].type.name}</span>`,
    healthStats,
  );

  const fightStats = createHTMLelement(
    'div',
    'stats-container flex-row-module',
    'stats-container',
    '',
    pokemonSummary,
  );

  createHTMLelement(
    'span',
    'pokemon-name span-size',
    'attack',
    `Attack: <span class="status-text"> ${result.stats[1].base_stat}</span>`,
    fightStats,
  );

  createHTMLelement(
    'span',
    'pokemon-name span-size',
    'defense',
    `Defense: <span class="status-text"> ${result.stats[2].base_stat}</span>`,
    fightStats,
  );

  const commentSumary = createHTMLelement(
    'div',
    'comment-summary flex-col',
    'comment-summary',
    '',
    modal,
  );

  createHTMLelement(
    'h3',
    'comment-title',
    'comment-title',
    'Comments (counter)',
    commentSumary,
  );

  createHTMLelement(
    'p',
    'comment-text',
    'comment-text',
    'This will be generated dynamically',
    commentSumary,
  );

  createHTMLelement(
    'h3',
    'comment-title',
    'form-title',
    'Add a comment',
    commentSumary,
  );

  const formContainer = createHTMLelement(
    'div',
    'form-container',
    'form-container',
    '',
    commentSumary,
  );

  const form = Forms.createForm(
    'form',
    'form',
    'form',
    'POST',
    formContainer,
  );

  Forms.createInput(
    'input',
    'input',
    'input-name',
    'text',
    'name',
    'Your name',
    form,
  );

  Forms.createTextArea(
    'textarea',
    'textarea',
    'textarea',
    'comment',
    'Your insights',
    form,
  );

  Forms.createButton(
    'button',
    'comments auto',
    'button-modal',
    'Submit',
    'submit',
    form,
  );
};
