import React from 'react';
import classes from './MainContent.module.css';
import NavCardBar from '../../components/NavCardBar/NavCardBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';

const MainContent = (props) => {
    return (
        <div className={classes.MainContent}>
            <NavCardBar />
            <BookDetailBar />
        </div>
    );
};

export default MainContent;
