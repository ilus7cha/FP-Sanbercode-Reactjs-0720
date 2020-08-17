import React, { useEffect } from "react";
import { getGameById } from "../api";
import { useParams } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
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

const GameDetail = () => {

    let { id } = useParams();
    const [state, setGames] = useGameContext();
    const game = state.game

    useEffect(() => {

        getGameById(id)
            .then((res) => {
                console.log(res)
                setGames({
                    ...state,

                    game: res.data
                });
            });
    }
        , [id]);

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typography align="left" style={{ marginLeft: "60px", marginTop: "20px" }} variant="h4" color="primary" gutterBottom>
                    Detail Game
      </Typography>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="" src={game.image_url} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4">
                                        {game.name}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Genre: {game.genre}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Single Player: {game.singlePlayer}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Multi Player: {game.multiPlayer}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Platform: {game.platform}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Release: {game.release}
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

export default GameDetail