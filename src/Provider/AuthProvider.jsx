import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerWithEmailPassword = (email, pass)=>{
        console.log(email, pass)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    useEffect(() =>{
        const fahim = onAuthStateChanged
    }, [])

    const authData = {
        registerWithEmailPassword,
        setUser,
        user,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;