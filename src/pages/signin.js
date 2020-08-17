import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { login } from "../api";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
     },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const {setIsLogin, setUser, input, setInput} = useContext(UserContext);
    const [messages, setMessages] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        if ((input.username.replace(/\s/g, '') === '') || (input.password.replace(/\s/g, '') === '')) {
            setMessages("Input username or password!")
            return
        }

        login(input.username, input.password)
        .then(
            res =>{
                if(res.data){
                    setIsLogin(true)
                    setUser(res.data)
                    setMessages("Login Success.")
                }
            }
        )
        .catch(()=>{
            setMessages("Failed to login!")
        })
       
    }

    const handleChange = (name) => (event) => {
        let value = event.target.value
        switch (name) {
            case "username": {
                setInput({ ...input, username: value })
                break;
            }
            case "password": {
                setInput({ ...input, password: value })
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
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        onChange={handleChange("username")}
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
                        onChange={handleChange("password")}
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
                        className={classes.submit}>Login</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <RouterLink to="/register"><Link variant="body2">
                                {"Don't have an account? Register now."}
                            </Link>
                            </RouterLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login