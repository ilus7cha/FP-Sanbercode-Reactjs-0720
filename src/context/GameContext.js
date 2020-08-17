import React, { useState, createContext, useContext } from "react";

const gameState = {
    game: {
        "name": "",
        "genre": "",
        "singlePlayer": null,
        "multiPlayer": null,
        "platform": "",
        "release": null
    },
    games: []
}
export const GameContext = createContext(gameState);
export const GameProvider = ({ children }) => {
    const game = useState(gameState)
    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = () => useContext(GameContext)