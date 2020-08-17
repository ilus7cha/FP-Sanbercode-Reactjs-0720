import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeMovies from "../pages/home-movies";
import HomeGames from "../pages/home-games";
import TableMovies from "../pages/table-movies";
import TableGames from "../pages/table-games";
import EditMovie from "../pages/edit-movie";
import EditGame from "../pages/edit-game";
import Login from "../pages/signin";
import Register from "../pages/register";
import { UserContext } from "../context/UserContext";
import MovieDetail from "../pages/movie-detail";
import GameDetail from "../pages/game-detail";


 const PrivateRoute = ({ user, ...props }) => {
        if (user) {
            return <Route {...props} />;
        } else {
            return <Redirect to="/login" />;
        }
    };

    const LoginRoute = ({ user, ...props }) =>
        user ? <Redirect to="/" /> : <Route {...props} />;
        
const Routes = () => {

    const {user} = useContext(UserContext);

   


    return (
      <section>
        <Switch>
          <Route exact path="/" user={user} component={HomeMovies} />
          <Route exact path="/games" user={user} component={HomeGames} />
          <Route exact path="/movies/:id" user={user} component={MovieDetail} />
          <Route exact path="/games/:id" user={user} component={GameDetail} />
          <Route exact path="/register" user={user} component={Register} />
          <LoginRoute exact path="/login" user={user} component={Login} />
          <PrivateRoute
            exact
            path="/movies-editor"
            user={user}
            component={TableMovies}
          />
          <PrivateRoute
            exact
            path="/games-editor"
            user={user}
            component={TableGames}
          />
          <PrivateRoute
            exact
            path="/form-movies/edit/:id"
            user={user}
            component={EditMovie}
          />
          <PrivateRoute
            exact
            path="/form-movies/create"
            user={user}
            component={EditMovie}
          />
          <PrivateRoute
            exact
            path="/form-games/edit/:id"
            user={user}
            component={EditGame}
          />
          <PrivateRoute
            exact
            path="/form-games/create"
            user={user}
            component={EditGame}
          />
        </Switch>
      </section>
    );
}

export default Routes
