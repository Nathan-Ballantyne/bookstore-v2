import React from 'react';
import NavBar from '../../components/Toolbar/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import MainContent from '../MainContent/MainContent';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <SearchBar />
            <MainContent />
        </>
    );
};

export default Dashboard;
