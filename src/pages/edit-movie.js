import React, { useEffect } from 'react';
import { editMovie, createMovie } from "../api"
import { useParams, useHistory } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import FormMovie from "../pages/form-movies";



const EditMovie = () =>{
    let {id} = useParams();
    let history = useHistory();
    const [state, setMovies] = useMovieContext()

    const handleChange = (movie) => setMovies({
        ...state,
        movie
    })

    useEffect( ()=>{
        let movieId = parseInt(id)
        if(movieId > 0){
        setMovies({
            ...state,
            movie: state.movies.find(movie => movie.id === movieId)
        })            
    }

},[id])

    const handleSubmit = (movie) => {
        if (movie.id) {
            editMovie(movie).then(res => {
                if (res.data) {
                    setMovies({
                        ...state,
                        movies: state.movies.map(_movie => _movie.id === movie.id ? movie : _movie)
                    })
                    history.goBack()
                }
            })
        } else {
            createMovie(movie).then(res => {
                if (res.data) {
                    setMovies({ ...state, movies: [...state.movies, movie] })
                history.goBack()
            }
                
            })
            
        }
    }
    return(
        <>
            <FormMovie handleSubmit={() => handleSubmit(state.movie)} movie={state.movie} handleChange={handleChange} />
        </>
    )
}

export default EditMovie