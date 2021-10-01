import axios from 'axios';

const apiFilmes = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        'content-type' : 'application/json;charset-utf-8',
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzg0ODhkNjJmYzE1Y2Y1NDcxNDliYjNiM2EwN2QzNiIsInN1YiI6IjYxNDEzZGRiOTQ1MGZlMDA0MzBmYTlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8QCw5hd6tc0FXDne6vIVAyAxozV9drLi_KSNQi0Tmzk'
    }
});

export default apiFilmes