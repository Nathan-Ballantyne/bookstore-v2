import React from 'react';
import ColapsedNavBar from './ColapsedNavBar/ColapsedNavBar';
import NavBar from './NavBar/NavBar';

const Toolbar = () => {
    return (
        <>
            <ColapsedNavBar />
            <NavBar />
        </>
    );
};

export default Toolbar;
