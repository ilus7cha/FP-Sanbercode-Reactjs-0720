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


const FormGame = ({ handleSubmit, game, handleChange }) => {
  const onChange = (event) => {
    let typeOfInput = event.target.name;

    switch (typeOfInput) {
      case "name":
        {
          handleChange({
            ...game,
            name: event.target.value,
          });
        }
        break;
      case "genre":
        {
          handleChange({
            ...game,
            genre: event.target.value,
          });
        }
        break;
      case "singlePlayer":
        {
          handleChange({
            ...game,
            singlePlayer: event.target.value,
          });
        }
        break;
      case "multiPlayer":
        {
          handleChange({
            ...game,
            multiPlayer: event.target.value,
          });
        }
        break;
      case "platform":
        {
          handleChange({
            ...game,
            platform: event.target.value,
          });
        }
        break;
      case "release":
        {
          handleChange({
            ...game,
            release: event.target.value,
          });
        }
        break;
      case "image_url":
        {
          handleChange({
            ...game,
            image_url: event.target.value,
          });
        }
        break;
      default:
        break;
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography component="h2" variant="h4" color="primary" gutterBottom>
        Form Game
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
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              value={game.name}
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
              value={game.genre}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              name="singlePlayer"
              type="number"
              label="Single Player"
              id="singlePlayer"
              value={game.singlePlayer}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              id="multiPlayer"
              label="Multi Player"
              name="multiPlayer"
              value={game.multiPlayer}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              name="platform"
              label="Platform"
              id="platform"
              value={game.platform}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="release"
              label="Release"
              name="release"
              type="number"
              value={game.release}
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
              value={game.image_url}
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
};

export default FormGame