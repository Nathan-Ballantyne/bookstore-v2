import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import LoginPage from './containers/Login/Login';

function App() {
    return (
        <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/' component={Dashboard} />
        </Switch>
    );
}

export default App;
