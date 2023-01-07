import React from "react";
import { useContext, useState, useEffect} from "react";
import { createContext } from "react";
import { auth } from "../api/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext({
    isLogged: null,
    setIsLogged: () => {},
    user: null
});



const AuthProvider = ({ children }) => {
    const [isLogged, setLogged] = useState(null);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLogged(true);
                setUser(currentUser);
            } else {
                setLogged(false);
                setUser(null);
                
            }
        }) 
        
    }, [isLogged]);
    
    return (
        <AuthContext.Provider value={{ isLogged, setLogged, user }}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;