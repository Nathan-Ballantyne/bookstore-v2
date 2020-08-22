import React from 'react';
import NavBar from '../../components/Toolbar/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavCardBar from '../../components/NavCardBar/NavCardBar';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <SearchBar />
            <NavCardBar />
        </>
    );
};

export default Dashboard;
