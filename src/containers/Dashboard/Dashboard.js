import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import MainContent from '../MainContent/MainContent';

const Dashboard = () => {
    return (
        <>
            <Toolbar />
            <SearchBar />
            <MainContent />
        </>
    );
};

export default Dashboard;
