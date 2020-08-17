import React, { useState, createContext, useMemo } from "react";


export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [input, setInput] = useState({username: "", password: "" })

    return (
        <UserContext.Provider value={useMemo(() =>{
        return { user, setUser, isLogin, setIsLogin, input, setInput }
}, [user, setUser, isLogin, setIsLogin, input, setInput])}>
            {props.children}
        </UserContext.Provider>
    );
};
