const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5422f467518b41208d7640102ef9014a";

export async function getNews() {
    return fetch(url).then(response => response.json()).then(json => json.articles);
}