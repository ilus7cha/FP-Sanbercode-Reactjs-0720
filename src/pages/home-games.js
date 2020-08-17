import React from 'react';
import { getGames } from '../api';
import { useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { useGameContext } from '../context/GameContext';
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

export default function Games() {
    const [state, setGames] = useGameContext()

    useEffect(
        () => {
            getGames()
                .then(res => {
                    if (res.data) {
                        setGames({
                            ...state,
                            games: res.data
                        })
                    }
                }
                )
        }
        , [])
const Game = ({ id, name, genre, platform, image_url }) => (
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
                                {name}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Genre: {genre}
                            </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Platform: {platform}
                        </Typography>
                            <Typography variant="body2" color="textSecondary">
                            </Typography>
                        </Grid>
                            <Grid item>
                        <RouterLink to={`/games/${id}`}>
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
        <Typography align="center" style={{marginTop: "20px"}} variant="h4" color="primary" gutterBottom>
            Games List
      </Typography>
            {state.games
                .map(game => (
                    <Game key={game.id} {...game} />
                ))}
        </>
    )
}