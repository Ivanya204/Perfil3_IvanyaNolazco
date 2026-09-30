const CHARACTERS_URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacters() {
  const response = await fetch(CHARACTERS_URL);

  if (!response.ok) {
    throw new Error(`Error ${response.status} al obtener los personajes`);
  }

  const data = await response.json();
  return data.results;
}
