import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const FormMovie = ({ handleSubmit, movie, handleChange }) => {
    const onChange = (event) => {
        let typeOfInput = event.target.name

        switch (typeOfInput) {
          case "title":
            {
              handleChange({
                ...movie,
                title: event.target.value,
              });
            }
            break;
          case "desc":
            {
              handleChange({
                ...movie,
                description: event.target.value,
              });
            }
            break;
          case "year":
            {
              handleChange({
                ...movie,
                year: event.target.value,
              });
            }
            break;
          case "duration":
            {
              handleChange({
                ...movie,
                duration: event.target.value,
              });
            }
            break;
          case "genre":
            {
              handleChange({
                ...movie,
                genre: event.target.value,
              });
            }
            break;
          case "rating":
            {
              handleChange({
                ...movie,
                rating: event.target.value,
              });
            }
            break;
          case "review":
            {
              handleChange({
                ...movie,
                review: event.target.value,
              });
            }
            break;
          case "image_url":
            {
              handleChange({
                ...movie,
                image_url: event.target.value,
              });
            }
            break;
          default:
            break;
        }
    }
    const classes = useStyles();
    return (
      <div className={classes.paper}>
        <Typography component="h2" variant="h4" color="primary" gutterBottom>
          Form Movie
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                value={movie.title}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="year"
                label="Year"
                type="number"
                name="year"
                value={movie.year}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="duration"
                type="number"
                label="Duration"
                id="duration"
                value={movie.duration}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="genre"
                label="Genre"
                name="genre"
                value={movie.genre}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="rating"
                type="number"
                label="Rating"
                id="rating"
                value={movie.rating}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="description"
                label="Description"
                name="desc"
                value={movie.description}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="review"
                label="Review"
                name="review"
                value={movie.review}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="image_url"
                label="Image URL"
                name="image_url"
                value={movie.image_url}
                onChange={onChange}
              />
            </Grid>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          </Grid>
        </form>
      </div>
    );
}

export default FormMovie