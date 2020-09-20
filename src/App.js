import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginPage from './containers/Login/Login';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    return (
        <Switch>
            <Route path='/login'>
                {isLoggedIn ? <Redirect to='/' /> : <LoginPage setLogin={setisLoggedIn} loggedIn={isLoggedIn} />}
            </Route>
            <Route path='/'>
                {!isLoggedIn ? <Redirect to='/login' /> : <Dashboard setLogin={setisLoggedIn} />}
            </Route>
        </Switch>
    );
}

export default App;
