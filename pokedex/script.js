const container = document.getElementById("container");
const max = 150;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);
console.log(mainTypes);

const arrayPokemons = async (id) => {
  for (let i = 1; i <= max; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const result = await fetch(url);
  const pokemon = await result.json();
  createCard(pokemon);
};

function createCard(pokemon) {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");

  const pokeTypes = pokemon.types.map(elem => elem.type.name);
  const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const color = colors[type];

  pokemonElement.style.backgroundColor = color;

  const pokemonInnerHTML = `
  
  <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
  </div>
  <div class="info">
    <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
        
    `;

  pokemonElement.innerHTML = pokemonInnerHTML;
  container.appendChild(pokemonElement);
}

arrayPokemons();
