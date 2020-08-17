import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { register } from "../api";
import { UserContext } from "../context/UserContext";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = () => {
    const {setUser, input, setInput} = useContext(UserContext);
    const [messages, setMessages] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if ((input.username.replace(/\s/g, '') === '') || (input.password.replace(/\s/g, '') === '')) {
            setMessages("Fill username and password!")
            return
        }


            register(input.username, input.password)
            .then(res => {
                if(res.data){
                    setMessages("User Registration Successful! Please Login.")
                }
            }).catch(error => {
                console.log(error)
                    setMessages("Failed to register!")

            })

.finally(() => {
setInput({
            username: "",
            password: "",
        })
})        

    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        switch (name) {
            case "username": {
                setInput({ ...input, username: value })
                break;
            }
            case "password": {
                setInput({ ...input, password: value })
                break;
            }
            default: {
                break;
            }
        }
    }

    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        onChange={handleChange}
                        value={input.username}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        onChange={handleChange}
                        value={input.password}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                    />
                    <Typography component="p" variant="p" align="center" color="primary">
                        {messages}
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>Register</Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <RouterLink to="/login"><Link variant="body2">
                                {"Already have an account? Login."}
                            </Link>
                            </RouterLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default Register