import React, { useEffect, useState } from 'react';
import { deleteMovie, getMovies } from "../api";
import { useMovieContext } from "../context/MovieContext";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    table: {
    minWidth: 650,
  },
  roots: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    width: "100%",
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
    button: {
    margin: theme.spacing(1),
  },
}));


const Movie = ({ id, title, description, year, duration, genre, rating, review, handleDelete }) => {
  const classes = useStyles();

    return (
        <TableRow key={id}>
              <TableCell component="th" scope="row">
                {title}
              </TableCell>
              <TableCell align="left">{rating}</TableCell>
              <TableCell align="left">{duration}</TableCell>
              <TableCell align="left">{genre}</TableCell>
              <TableCell align="left">{year}</TableCell>
              <TableCell align="left">{description}</TableCell>
              <TableCell align="left">{review}</TableCell>
              <TableCell align="center">
          <RouterLink style={{ textDecoration: 'none' }} to={`/form-movies/edit/${id}`}><Button size="small" className={classes.button} variant="contained" color="primary">Edit</Button></RouterLink>
                <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={handleDelete}
        className={classes.button}>
        Delete
      </Button>
    </TableCell>
</TableRow>
    )
}


const TableMovies = () => {
    const [search, setSearch] = useState("")
    const [state, setMovies] = useMovieContext()
    const rating = state.rating;

    useEffect(
        () => {
            getMovies()
                .then(res => {
                    if (res.data) {
                        setMovies({
                            ...state,
                            movies: res.data
                        })
                    }
                })
        }
        , [])
    const handleDelete = (movieId) => {
        deleteMovie(movieId)
            .then(res => {
                console.log(res)
                if (res.data === "success")
                    setMovies({ ...state, movies: state.movies.filter(movie => movie.id !== parseInt(movieId)) })

            })
    }

    const handleEdit = (event) => {
        const movieId = parseInt(event.target.value)
        setMovies({
            ...state,
            movie: state.movies.find(movie => movie.id === movieId)
        })
    }

  const handleSearch = (event) =>{
    setSearch(event.target.value)

  } 


  const classes = useStyles(); 
  const filterBySearch = movie => search && search !== "" ? movie.title.toLowerCase().includes(search.toLowerCase()) : true;
    return (
        <>  
        <Typography align="center" variant="h4" color="primary" style={{marginTop: "20px"}} gutterBottom>
          Data Movies
      </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100'}}>
          <RouterLink style={{ textDecoration: 'none' }} to={`/form-movies/create`}><Button style={{marginLeft: '50px', marginTop: "20px", marginBottom: "20px"}} size="small" variant="contained" color="primary">
        Add Movie
      </Button></RouterLink>
        <Paper component="form" style={{marginRight: '50px', marginTop: "10px", marginBottom: "20px"}}>

          <InputBase
            className={classes.input}
            onChange={handleSearch}
            placeholder="Search Movie Title"
            inputProps={{ 'aria-label': 'search movie title' }}
          />
          <IconButton type="submit" className={classes.iconButton} onClick={handleSearch} aria-label="search">
            <SearchIcon />
          </IconButton>

        </Paper>        
        </div>  
          <TableContainer className={classes.table} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Title</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Year</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Review</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>                  
        {state.movies
        .filter(filterBySearch)
        .map((movie, index) => (
            <Movie key={movie.id + index} {...movie} handleDelete={() => handleDelete(movie.id)} handleEdit={handleEdit} />
        ))
    }
        </TableBody>
        </Table>
        </TableContainer>
      

        </>
    )
}



export default TableMovies