import React, { createContext, useState, useContext } from "react";

const ContextoDoUsuario = createContext();

export const SetarUsuario = ({children}) => {
    const [tipoUsuario, setTipoUsuario] = useState(null);

    return (
        <ContextoDoUsuario.Provider value={{ tipoUsuario, setTipoUsuario}}>
            {children}
        </ContextoDoUsuario.Provider>
    );
}

export const useTipoUsuario = () => useContext(ContextoDoUsuario);