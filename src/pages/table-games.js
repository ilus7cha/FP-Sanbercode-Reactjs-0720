import React, { useEffect, useState } from 'react';
import { deleteGame, getGames } from "../api";
import { Link as RouterLink } from "react-router-dom";
import { useGameContext } from "../context/GameContext";
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
    minWidth: 500,
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


const Game = ({ id, name, genre, singlePlayer, multiPlayer, platform, release, handleDelete }) => {
  const classes = useStyles();

    return (
                <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="left">{genre}</TableCell>
              <TableCell align="left">{singlePlayer}</TableCell>
              <TableCell align="left">{multiPlayer}</TableCell>
              <TableCell align="left">{platform}</TableCell>
              <TableCell align="left">{release}</TableCell>
              <TableCell align="center">
          <RouterLink style={{ textDecoration: 'none' }} to={`/form-games/edit/${id}`}><Button size="small" className={classes.button} variant="contained" color="primary">Edit</Button></RouterLink>
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

const TableGames = () => {
    const [search, setSearch] = useState("")
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
                })
        }
        , [])
    const handleDelete = (gameId) => {
        deleteGame(gameId)
            .then(res => {
                console.log(res)
                if (res.data === "success")
                    setGames({ ...state, games: state.games.filter(game => game.id !== parseInt(gameId)) })

            })
    }

    const handleEdit = (event) => {
        const gameId = parseInt(event.target.value)
        setGames({
            ...state,
            game: state.games.find(game => game.id === gameId)
        })
    }

  const handleSearch = (event) => {
    setSearch(event.target.value)

  } 

  const classes = useStyles();
  const filterBySearch = game => search && search !== "" ? game.name.toLowerCase().includes(search.toLowerCase()) : true;
    return (
        <>
        <Typography align="center" variant="h4" style={{ marginTop: "20px" }} color="primary" gutterBottom>
          Data Games
      </Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100'}}>
    
          <RouterLink style={{ textDecoration: 'none' }} to={`/form-games/create`}><Button style={{marginLeft: '50px', marginTop: "20px", marginBottom: "20px"}} size="small" variant="contained" color="primary">
        Add Game
      </Button>
      </RouterLink>
        <Paper component="form" style={{marginRight: '50px', marginTop: "10px", marginBottom: "20px"}}>
          <InputBase
            className={classes.input}
            onChange={handleSearch}
            placeholder="Search Game"
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
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Single Player</TableCell>
            <TableCell align="center">Multi Player</TableCell>
            <TableCell align="center">Platform</TableCell>
            <TableCell align="center">Release</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>                    
        {state.games
        .filter(filterBySearch)
        .map((game) => (
            <Game key={game.id} {...game} handleDelete={() => handleDelete(game.id)} handleEdit={handleEdit} />
        ))
    }
        </TableBody>
        </Table>
        </TableContainer>
        </>
    )
}



export default TableGames