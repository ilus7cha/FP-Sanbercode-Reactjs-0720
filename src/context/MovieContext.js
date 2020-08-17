import React, { useState, createContext, useContext } from "react";

const movieState = {
    movie: {
        "title": "",
        "description": "",
        "year": null,
        "duration": null,
        "genre": "",
        "rating": null,
        "review": "",
        "image_url": ""
    },
    movies: [],
    rating: null,
    year: null,
    genre: null,
}
export const MovieContext = createContext(movieState);
export const MovieProvider = ({ children }) => {
    const movie = useState(movieState)
    return (
        <MovieContext.Provider value={movie}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)