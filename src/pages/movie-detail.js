import React, { useEffect } from "react";
import { getMovieById } from "../api";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
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
    width: 500,
    height: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  roots: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'right',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const MovieDetail = () => {

  let { id } = useParams();
  const [state, setMovies] = useMovieContext();
  const movie = state.movie

  useEffect(() => {

        getMovieById(id)
        .then((res) => {
          console.log(res)
          setMovies({
            ...state,
        
            movie: res.data});
        });
    }
  ,[id]);

  const classes = useStyles();

  return (
    <>
          <div className={classes.root}>
    <Typography align="left" style={{marginLeft: "60px", marginTop: "20px"}} variant="h4" color="primary" gutterBottom>
        Detail Movie
      </Typography>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="" src={movie.image_url} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                {movie.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Genre: {movie.genre}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Year: {movie.year}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Rating: {movie.rating}
              </Typography>
                <Typography variant="subtitle1" gutterBottom>
                Description: {movie.description}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Review: {movie.review}
              </Typography>
              <Typography variant="body2" color="textSecondary">
              </Typography>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Paper>
    </div>
  </>
  );
};

export default MovieDetail