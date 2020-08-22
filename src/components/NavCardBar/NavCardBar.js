import React from 'react';
import NavCard from './NavCard/NavCard';
import classes from './NavCardBar.module.css';

const NavCardBar = () => {
    return (
        <div className={classes.NavCardBar}>
            <NavCard />
        </div>
    );
};

export default NavCardBar;
