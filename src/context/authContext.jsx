import React from "react";
import { useState, useEffect} from "react";
import { auth } from "../api/firebase/auth";
import { onIdTokenChanged } from "firebase/auth";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setCurrentUser] = useState(null);
    
    useEffect(() => {
        onIdTokenChanged(auth, (user) => {
            if(user) {
                setCurrentUser(user);
            }
        });
    }, [user]);
    
    return (
        <AuthContext.Provider
         value={user}
         >
        {children}
      </AuthContext.Provider>
    );
};

