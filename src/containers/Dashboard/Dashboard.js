import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Toolbar/SideDrawer/SideDrawer';
import SearchBar from '../../components/SearchBar/SearchBar';
import MainContent from '../MainContent/MainContent';

const Dashboard = () => {
    return (
        <>
            <SideDrawer />
            <SearchBar />
            <MainContent />
        </>
    );
};

export default Dashboard;
