const url = "https://swapi.dev/api/starships/";

const getStarShips = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error(e);
  }
};

export default getStarShips;