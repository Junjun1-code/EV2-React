export async function Api(parametro = "", texto = "") {
  const query = `${parametro}${texto}`;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const data = await response.json();
  return data.drinks || [];
}

export default Api;