import React from 'react';
import classes from './MainContent.module.css';
import NavCardBar from '../../components/NavCardBar/NavCardBar';

const MainContent = (props) => {
    return (
        <div className={classes.MainContent}>
            <NavCardBar />
        </div>
    );
};

export default MainContent;
