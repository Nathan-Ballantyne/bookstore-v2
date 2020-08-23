import React from 'react';
import classes from './ColapsedNavBar.module.css';
import icon from '../../../assets/Icons/book-icon.png';

const ColapsedNavBar = () => {
    return (
        <img className={classes.ColapsedNavBar} src={icon} alt='book-logo' />
    )
}

export default ColapsedNavBar
