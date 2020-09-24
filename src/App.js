import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginPage from './containers/Login/Login';
import BookPage from './containers/Pages/BookInformation/BookInformation';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [googleToken, setgoogleToken] = useState('');

    return (
        <Switch>
            <Route path='/login'>
                {isLoggedIn ? <Redirect to='/' /> : <LoginPage setToken={setgoogleToken} setLogin={setisLoggedIn} loggedIn={isLoggedIn} />}
            </Route>
            <Route path='/book/:id'>
                <BookPage />
            </Route>
            <Route path='/'>
                {!isLoggedIn ? <Redirect to='/login' /> : <Dashboard token={googleToken} setLogin={setisLoggedIn} />}
            </Route>
        </Switch>
    );
}

export default App;
