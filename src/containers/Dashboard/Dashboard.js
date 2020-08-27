import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import MainContent from '../MainContent/MainContent';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Toolbar open={open} setOpen={setOpen} />
            <SearchBar open={open} setOpen={setOpen} />
            <MainContent open={open} setOpen={setOpen} />
        </>
    );
};

export default Dashboard;
