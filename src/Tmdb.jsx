const API_KEY = "14510e4ed1ab929f53ba65555d612fdd";
const API_BASE = "https://api.themoviedb.org/3";

/* GENEROS EM LINHAS
 - Originais da Netflix
 - Recomendados (trending)
 - em alta (Top rated)
 - Ação
 - Comédia
 - Terror
 - Romance
 - Documentário
 */

const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais da Netflix",
                items: await basicFecth(
                    `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: "trending",
                title: "Recomendados Para Você",
                items: await basicFecth(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFecth(
                    `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: "action",
                title: "Filmes Que Vão Explodir Seu Coração",
                items: await basicFecth(
                    `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: "comedy",
                title: "Para Rachar o Bico",
                items: await basicFecth(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: "comedy",
                title: "Para Rachar o Bico",
                items: await basicFecth(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
            {
                slug: "horror",
                title: "Para Arrepiar até os Cabelos",
                items: await basicFecth(
                    `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
                ),
            },
        ];
    },
};
