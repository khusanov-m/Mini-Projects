const poke_container = document.getElementById("poke-container"),
  pokemon_count = 150,
  colors = {
    fire: "#fddfdf",
    grass: "#defde0",
    electric: "#fcf7de",
    water: "#def3fd",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#f5f5f5",
    fighting: "#e6e0d4",
    normal: "#f5f5f5",
  },
  main_types = Object.keys(colors),
  fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
      await getPokemon(i);
    }
  },
  getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`,
      res = await fetch(url),
      data = await res.json();

    createPokemonCard(data);
  },
  createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
      id = pokemon.id.toString().padStart(3, "0"),
      poke_types = pokemon.types.map((type) => type.type.name),
      type = main_types.find((type) => poke_types.indexOf(type) > -1),
      color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
      <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}">
      </div>
      <div class="info">
        <span class="number">${id}</span>
        <h3 class="naame">${name}</h3>
        <small class="type">Type: <strong>${type}</strong></small>
      </div>`;

    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);
  };

fetchPokemons();
