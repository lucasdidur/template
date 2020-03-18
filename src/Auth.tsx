import React, {ReactNode, useEffect, useState} from "react";
import {Firebase} from "./firebase";
import {User} from "firebase/app";

export const AuthContext = React.createContext<User | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [authWasListened, setAuthWasListened] = useState(false);

    useEffect(() => {
        return Firebase.auth().onAuthStateChanged(
            (authUser) => {
                if (authUser) {
                    setCurrentUser(authUser);
                    setAuthWasListened(true);
                } else {
                    setCurrentUser(null);
                    setAuthWasListened(true);
                }
            }
        );  //

    }, []);


    return (
        authWasListened ?
            <AuthContext.Provider
                value={currentUser}
            >
                {children}
            </AuthContext.Provider>
            : <div>Waiting for auth...</div>
    );
};
