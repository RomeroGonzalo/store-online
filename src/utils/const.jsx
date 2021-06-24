export async function getData(zapatillas){
    const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${zapatillas}`);
    const data = await response.json();
    return data.results;
}

getData()