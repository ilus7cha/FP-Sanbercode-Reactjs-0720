import Axios from 'axios';

export const getMovies = () =>
    Axios.get(`https://backendexample.sanbersy.com/api/movies`)

export const getMovieById = (id) =>
    Axios.get(`https://backendexample.sanbersy.com/api/movies/${id}`)

export const createMovie = (movie) =>
    Axios.post(`https://backendexample.sanbersy.com/api/movies`, movie)

export const editMovie = (movie) =>
    Axios.put(`https://backendexample.sanbersy.com/api/movies/${movie.id}`, movie)

export const deleteMovie = (id) =>
    Axios.delete(`https://backendexample.sanbersy.com/api/movies/${id}`)


export const getGames = () =>
    Axios.get(`https://backendexample.sanbersy.com/api/games`)

export const getGameById = (id) =>
    Axios.get(`https://backendexample.sanbersy.com/api/games/${id}`)

export const createGame = (game) =>
    Axios.post(`https://backendexample.sanbersy.com/api/games`, game)

export const editGame = (game) =>
    Axios.put(`https://backendexample.sanbersy.com/api/games/${game.id}`, game)

export const deleteGame = (id) =>
    Axios.delete(`https://backendexample.sanbersy.com/api/games/${id}`)

    // === USER ===

    // GET https://backendexample.sanbersy.com/api/users

    //     GET https://backendexample.sanbersy.com/api/users/{ID_USER}

    //     POST https://backendexample.sanbersy.com/api/users

    //     PUT https://backendexample.sanbersy.com/api/users/{ID_USER}

    //     POST https://backendexample.sanbersy.com/api/login
    //     (parameter untuk login username dan password)

    export const login = (username, password) =>
        Axios.post(`https://backendexample.sanbersy.com/api/login`, {username, password})

    export const register = (username, password) =>
        Axios.post(`https://backendexample.sanbersy.com/api/users`, { username, password, created_at: new Date() })

    export const getUser = () =>
        Axios.get(`https://backendexample.sanbersy.com/api/users`)