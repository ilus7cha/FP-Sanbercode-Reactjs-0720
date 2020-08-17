import React from 'react';
import { getMovies } from '../api';
import { useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { useMovieContext } from '../context/MovieContext';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '90%',
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));


export default function Movies() {

    const[state, setMovies] = useMovieContext()

    useEffect(
        () =>{
            getMovies()
                .then(res => {
                    if (res.data) {
                        setMovies({
                            ...state,
                            movies: res.data
                        })
                    }
                }
                )
        }
        ,[])

const Movie = ({ id, image_url, title, rating, genre, year }) => (
  <div className={classes.root}>
    <Typography align="center" variant="h4" color="primary" gutterBottom>
      </Typography>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="" src={image_url} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Genre: {genre}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Year: {year}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Rating: {rating}
              </Typography>
              <Typography variant="body2" color="textSecondary">
              </Typography>
            </Grid>
            <Grid item>
              <RouterLink to={`/movies/${id}`}>
              <Typography variant="body2" style={{ cursor: 'pointer' }}>
                Detail
                </Typography>
                </RouterLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
)
  const classes = useStyles();

    return (
    <>
        <Typography align="center" variant="h4" style={{marginTop: "20px"}}color="primary" gutterBottom>
          Movies List
      </Typography>
            {state.movies
                .sort((current, comparator) => current.rating > comparator.rating ? -1 : 1)
                .filter(movie => state.rating === null ? true : state.rating === 0 ? movie.rating >= 5 : movie.rating <5 )
                .filter(movie => state.genre === null ? true : state.genre.includes(movie.genre))
                .filter(movie => state.year === null ? true : state.year === 0 ? movie.year >= 2010 && movie.year <= 2015 : movie.year >= 2016 && movie.year <= 2020)
                .map(movie => (
                    <Movie key={movie.id} {...movie} />
                ))}
        </>
    )
}