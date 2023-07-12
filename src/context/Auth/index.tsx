/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { createContext, useCallback, useState  } from "react";
import { httpClient } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
    children: React.ReactNode;
}

interface AuthContextData {
    getAccessToken: () => void;
    logout: () => void;
    isUserLogged: () => boolean;
    token: string | null;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC<AuthContextProps> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const navigate = useNavigate();

    const getAccessToken = useCallback( () => {
        const token = window.location.href.split("#")[1].split("&")[0].split("=")[1];

        if(!token) {
            // trocar isso por um toast
            alert("Nao foi possivel fazer o login")
            navigate("/");
            return;
        }

        httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setToken(token);
    }, [])

    const logout = () => {
        setToken(null);
        navigate("/");
    }

    const isUserLogged = () => {
        return !!token;
    }
    
    return(
        <AuthContext.Provider value={{ getAccessToken, token, logout, isUserLogged}}>
            {children}
        </AuthContext.Provider>
    )
}

export {  AuthContext, AuthProvider  }
