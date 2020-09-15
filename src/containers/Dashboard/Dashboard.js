import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MainContent from '../MainContent/MainContent';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Toolbar open={open} setOpen={setOpen} />
            <Search open={open} setOpen={setOpen} />
            <MainContent open={open} setOpen={setOpen} />
        </>
    );
};

export default Dashboard;
