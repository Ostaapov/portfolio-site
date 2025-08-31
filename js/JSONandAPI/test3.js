async function fetchPokemon() {
    const name = document.getElementById('pokemonName').value.toLowerCase().trim();
    const infoDiv = document.getElementById('pokemonInfo');
    infoDiv.innerHTML = 'Загрузка...';

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Покемон не найден');
      }
      const data = await response.json();

      infoDiv.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <p>Рост: ${data.height}</p>
        <p>Вес: ${data.weight}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
      `;
    } catch (error) {
      infoDiv.innerHTML = `<p style="color: red;">Ошибка: ${error.message}</p>`;
    }
  }