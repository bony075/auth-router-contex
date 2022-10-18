import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.int';
export const AuthContext = createContext();

const Auth = getAuth(app);

const UserContext = ({ children }) => {
    // const username={displayName:'akaass'}
    const [username, setUserName] = useState({ displayName: 'akaass' });

    const createuser = (email, password) => { 
        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const signIn = (email, password) => { 
        return signInWithEmailAndPassword(Auth,email,password);
    }


    const authInfo = {username,createuser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;