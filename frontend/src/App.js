import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginPage from './containers/Login/Login';

function App() {
    const isSignedIn = useSelector((state) => state.signedIn);
    const [googleToken, setgoogleToken] = useState('');

    return (
        <Switch>
            <Route path='/login'>
                {isSignedIn ? (
                    <Redirect to='/' />
                ) : (
                    <LoginPage
                        setToken={setgoogleToken}
                        loggedIn={isSignedIn}
                    />
                )}
            </Route>
            <Route path='/'>
                {!isSignedIn ? (
                    <Redirect to='/login' />
                ) : (
                    <Dashboard token={googleToken} />
                )}
            </Route>
        </Switch>
    );
}

export default App;
