import React from 'react';
import './App.css';
import Main from './layouts/main';
import { UserProvider } from './context/UserContext';
import { MovieProvider } from './context/MovieContext';
import { GameProvider } from './context/GameContext';


function App() {
  return (
    <>
      <UserProvider>
      <MovieProvider>
      <GameProvider>
        <Main />
      </GameProvider>
      </MovieProvider>
      </UserProvider>
    </>

  );
}

export default App;
