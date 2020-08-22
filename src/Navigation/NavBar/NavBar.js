import React from 'react';
import NavItems from '../NavItems/Navtems';
import classes from './NavBar.module.css'; 

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
           <NavItems />
        </div>
    )
}

export default NavBar;
