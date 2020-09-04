import React from 'react';
import NavCard from './Bookshelf/Bookshelf';
import classes from './BookshelfBar.module.css';

const NavCardBar = () => {
    return (
        <div className={classes.NavCardBar}>
            <NavCard />
        </div>
    );
};

export default NavCardBar;
