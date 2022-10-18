import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { username}= useContext(AuthContext);
    return (
        <div>
            <h1>this is home of user { username.displayName}</h1>
        </div>
    );
};

export default Home;