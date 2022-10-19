import createHTMLelement from "./createHTMLelement";

export default async (id) => {
 
    const pokemonsContainer = document.querySelector('#modal');
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );

      const result = await response.json();
      const modal = document.querySelector('.modal-content');

      
      const closeBtn = createHTMLelement(
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

      const p = createHTMLelement(
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

      const statsHp = createHTMLelement(
        'p',
        'pokemon-name',
        'stats-hp',
        `HP: ${result.stats[0].base_stat}`,
        healthStats,
      );

      const type = createHTMLelement(
        'p',
        'pokemon-name',
        'type',
        `Type: ${result.types[0].type.name}`,
        healthStats,
      );        

      const fightStats = createHTMLelement(
        'div',
        'stats-container flex-row-module',
        'stats-container',
        '',
        pokemonSummary,
      );

      const attack = createHTMLelement(
        'p',
        'pokemon-name',
        'attack',
        `Attack: ${result.stats[1].base_stat}`,
        fightStats,
      );

      const defense = createHTMLelement(
        'p',
        'pokemon-name',
        'defense',
        `Defense: ${result.stats[2].base_stat}`,
        fightStats,
      );

      const commentSumary = createHTMLelement(
        'div',
        'comment-summary flex-col',
        'comment-summary',
        '',
        modal,
      );

      const commentTitle = createHTMLelement(
        'h3',
        'comment-title',
        'comment-title',
        'Comments (counter)',
        commentSumary,
      );

      const comment = createHTMLelement(
        'p',
        'comment-text',
        'comment-text',
        'This will be generated dynamically',
        commentSumary,
      );

      const formTitle = createHTMLelement(
        'h3',
        'comment-title',
        'form-title',
        'Add a comment',
        commentSumary,
      );

      const commentForm = createHTMLelement(
        'form',
        'comment-form',
        'comment-form',
        '',
        commentSumary,
      );

      const inputName = createHTMLelement(
        'input',
        'input-name',
        'input-name',
        '',
        commentForm,
      );




    }
     
    
